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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../../../common/dtos");
const dtos_2 = require("../dtos");
const services_1 = require("../services");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async getAllQuestions(paginationDto) {
        return await this.questionService.getAllQuestions(paginationDto);
    }
    async createQuestion(req, question) {
        const userId = req.user?.sub?.userId;
        return await this.questionService.createQuestion(+userId, question);
    }
};
exports.QuestionController = QuestionController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getAllQuestions", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_2.CreateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createQuestion", null);
exports.QuestionController = QuestionController = __decorate([
    (0, common_1.Controller)('/question'),
    __metadata("design:paramtypes", [services_1.QuestionService])
], QuestionController);
//# sourceMappingURL=question.controller.js.map