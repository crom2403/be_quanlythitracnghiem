"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
const entities_2 = require("../../users/entities");
const typeorm_2 = require("typeorm");
let QuestionService = class QuestionService {
    constructor(userRepository, chapterRepository, questionRepository, answerRepository) {
        this.userRepository = userRepository;
        this.chapterRepository = chapterRepository;
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
    }
    async getAllQuestions(paginationDto) {
        const { page, limit } = paginationDto;
        const [items, total] = await this.questionRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'DESC',
            },
        });
        return {
            items,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async createQuestion(userId, createQuestionDto) {
        console.log(userId);
        console.log(createQuestionDto);
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found, cannot create question');
        }
        const chapter = await this.chapterRepository.findOne({
            where: {
                id: createQuestionDto.chapterId,
            },
        });
        if (!chapter) {
            throw new common_1.NotFoundException('Chapter not found, cannot create question');
        }
        const listAnswer = createQuestionDto.answers;
        if (!Array.isArray(listAnswer) || listAnswer.length === 0) {
            throw new common_1.BadRequestException('Answers are required');
        }
        try {
            const question = await this.questionRepository.save({
                content: createQuestionDto.content,
                difficulty: createQuestionDto.difficulty_level,
                chapter: chapter,
                created_by: user,
            });
            const savedAnswers = await Promise.all(listAnswer?.map(async (el) => {
                const newAnswer = new entities_1.Answer();
                newAnswer.content = el.content;
                newAnswer.is_correct = el.is_correct;
                newAnswer.order_index = el.order_index;
                newAnswer.question = question;
                return await this.answerRepository.save(newAnswer);
            }));
            question.answers = savedAnswers;
            return question;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Failed to create question: ${error.message}`);
        }
    }
};
exports.QuestionService = QuestionService;
exports.QuestionService = QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_2.User)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Chapter)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Question)),
    __param(3, (0, typeorm_1.InjectRepository)(entities_1.Answer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], QuestionService);
//# sourceMappingURL=question.service.js.map