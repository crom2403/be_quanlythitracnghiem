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
exports.ExamAttemptController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../dtos");
const services_1 = require("../services");
let ExamAttemptController = class ExamAttemptController {
    constructor(examAttemptService) {
        this.examAttemptService = examAttemptService;
    }
    async createExamAttempt(req, createExamAttemptDto) {
        const userId = req.user?.sub.userId;
        return this.examAttemptService.create(userId, createExamAttemptDto);
    }
};
exports.ExamAttemptController = ExamAttemptController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.CreateExamAttemptDto]),
    __metadata("design:returntype", Promise)
], ExamAttemptController.prototype, "createExamAttempt", null);
exports.ExamAttemptController = ExamAttemptController = __decorate([
    (0, common_1.Controller)('exam-attempt'),
    __metadata("design:paramtypes", [services_1.ExamAttemptService])
], ExamAttemptController);
//# sourceMappingURL=exam-attempt.controller.js.map