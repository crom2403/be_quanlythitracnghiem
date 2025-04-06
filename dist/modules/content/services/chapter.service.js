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
exports.ChapterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
const entities_2 = require("../../subject/entities");
let ChapterService = class ChapterService {
    constructor(chapterRepository, subjectRepository) {
        this.chapterRepository = chapterRepository;
        this.subjectRepository = subjectRepository;
    }
    async getAllChapters(subjectId, paginationDto) {
        if (subjectId !== null) {
            const subject = await this.subjectRepository.findOneBy({ id: subjectId });
            if (!subject) {
                throw new common_1.NotFoundException(`Subject với ID ${subjectId} không tồn tại`);
            }
            return this.chapterRepository.find({
                where: { subject: { id: subjectId } },
                select: ['id', 'name'],
                order: {
                    id: 'DESC',
                },
            });
        }
        const { page, limit } = paginationDto;
        const skip = (page - 1) * limit;
        const [items, total] = await this.chapterRepository.findAndCount({
            skip,
            take: limit,
            select: ['id', 'name'],
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
    async getChapterById(id) {
        return this.chapterRepository.findOne({ where: { id } });
    }
    async createChapter(createChapterDto) {
        const { subjectId, name } = createChapterDto;
        const subject = await this.subjectRepository.findOneBy({ id: subjectId });
        if (!subject) {
            throw new common_1.NotFoundException(`Subject với ID ${subjectId} không tồn tại`);
        }
        const chapter = new entities_1.Chapter();
        chapter.name = name;
        chapter.subject = subject;
        return this.chapterRepository.save(chapter);
    }
    async updateChapter(id, updateChapterDto) {
        const chapter = await this.chapterRepository.findOneBy({ id });
        if (!chapter) {
            throw new common_1.NotFoundException(`Chapter với ID ${id} không tồn tại`);
        }
        await this.chapterRepository.update(id, { name: updateChapterDto.name });
        return this.chapterRepository.findOneBy({ id });
    }
    async deleteChapter(id) {
        const result = await this.chapterRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Chapter with ID ${id} not found`);
        }
        else {
            return `Chapter with Id ${id} deleted successfully`;
        }
    }
};
exports.ChapterService = ChapterService;
exports.ChapterService = ChapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Chapter)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_2.Subject)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ChapterService);
//# sourceMappingURL=chapter.service.js.map