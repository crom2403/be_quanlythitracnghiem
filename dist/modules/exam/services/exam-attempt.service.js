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
exports.ExamAttemptService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
const typeorm_2 = require("typeorm");
const users_1 = require("../../users");
const auth_1 = require("../../auth");
const exam_service_1 = require("./exam.service");
let ExamAttemptService = class ExamAttemptService {
    constructor(examAttemptRepository, userRepository, examService) {
        this.examAttemptRepository = examAttemptRepository;
        this.userRepository = userRepository;
        this.examService = examService;
    }
    async getAllExamAttemptOfStudent() {
        return this.examAttemptRepository.find();
    }
    async create(studentId, createExamAttemptDto) {
        const { exam_id, list_question, start_time, end_time, test_time, tab_switch_count, } = createExamAttemptDto;
        const user = await this.userRepository.findOne({
            where: {
                id: +studentId,
            },
        });
        if (!user) {
            throw new Error('User not found');
        }
        if (user.role.name !== auth_1.RoleType.STUDENT) {
            throw new Error('User is not student');
        }
        const exam = await this.examService.getExamById(exam_id);
        if (!exam) {
            throw new Error('Exam not found');
        }
        const score = this.calculateExamScore(list_question, exam.exam_questions);
        const newExamAttempt = this.examAttemptRepository.create({
            end_time: new Date(end_time),
            start_time: new Date(start_time),
            tab_switch_count,
            score,
            test_time: +test_time,
            exam,
            user,
        });
        const result = await this.examAttemptRepository.save(newExamAttempt);
        if (!result) {
            throw new Error('Create exam attempt failed');
        }
        return 'Nôp bài thi thành công';
    }
    calculateExamScore(studentAnswers, examQuestions) {
        let correctAnswersCount = 0;
        const totalQuestions = examQuestions.length;
        studentAnswers.forEach((studentQuestion) => {
            const examQuestion = examQuestions.find((q) => q.id === studentQuestion.question_id);
            if (!examQuestion)
                return;
            let isCorrect = true;
            const correctAnswers = examQuestion.answers.filter((ans) => ans.is_correct);
            const selectedAnswers = studentQuestion.list_answer.filter((ans) => ans.is_selected);
            if (selectedAnswers.length !== correctAnswers.length) {
                isCorrect = false;
            }
            else {
                selectedAnswers.forEach((selectedAns) => {
                    const isCorrectAnswer = correctAnswers.some((correctAns) => correctAns.id === selectedAns.anwer_id);
                    if (!isCorrectAnswer) {
                        isCorrect = false;
                    }
                });
            }
            if (isCorrect) {
                correctAnswersCount++;
            }
        });
        const score = totalQuestions > 0 ? (correctAnswersCount / totalQuestions) * 10 : 0;
        return Math.round(score * 100) / 100;
    }
};
exports.ExamAttemptService = ExamAttemptService;
exports.ExamAttemptService = ExamAttemptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.ExamAttempt)),
    __param(1, (0, typeorm_1.InjectRepository)(users_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        exam_service_1.ExamService])
], ExamAttemptService);
//# sourceMappingURL=exam-attempt.service.js.map