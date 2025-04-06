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
exports.ExamController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../dtos");
const services_1 = require("../services");
let ExamController = class ExamController {
    constructor(examService) {
        this.examService = examService;
    }
    async getAllExamOfStudent(req) {
        const userId = req.user?.sub.userId;
        return this.examService.getAllExamOfStudent(20);
    }
    async getExamById(examId) {
        return this.examService.getExamById(+examId);
    }
    async createExamManual(req, createExamManualDto) {
        const userId = req.user?.sub.userId;
        return this.examService.createExamManual(userId, createExamManualDto);
    }
    async addQuestionToExam(examId, addQuestionToExamDto) {
        return this.examService.addQuestionToExam(+examId, addQuestionToExamDto);
    }
};
exports.ExamController = ExamController;
__decorate([
    (0, common_1.Get)('/get-all-exams-of-student'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getAllExamOfStudent", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getExamById", null);
__decorate([
    (0, common_1.Post)('/create-manual'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.CreateExamManualDto]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "createExamManual", null);
__decorate([
    (0, common_1.Post)('/add-question-to-exam/:examId'),
    __param(0, (0, common_1.Param)('examId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.AddQuestionToExamDto]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "addQuestionToExam", null);
exports.ExamController = ExamController = __decorate([
    (0, common_1.Controller)('exam'),
    __metadata("design:paramtypes", [services_1.ExamService])
], ExamController);
//# sourceMappingURL=exam.controller.js.map