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
exports.ChapterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("../../../common/dtos");
const services_1 = require("../services");
const dtos_2 = require("../dtos");
let ChapterController = class ChapterController {
    constructor(chapterService) {
        this.chapterService = chapterService;
    }
    findAll(subjectId, paginationDto) {
        return this.chapterService.getAllChapters(subjectId ? parseInt(subjectId) : null, paginationDto);
    }
    async getChapterById(id) {
        return await this.chapterService.getChapterById(+id);
    }
    async createChapter(createChapterDto) {
        return await this.chapterService.createChapter(createChapterDto);
    }
    async deleteChapter(id) {
        return await this.chapterService.deleteChapter(+id);
    }
    async updateChapter(id, updateChapterDto) {
        return await this.chapterService.updateChapter(+id, updateChapterDto);
    }
};
exports.ChapterController = ChapterController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('subjectId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], ChapterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "getChapterById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_2.CreateChapterDto]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "createChapter", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "deleteChapter", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_2.UpdateChapterDto]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "updateChapter", null);
exports.ChapterController = ChapterController = __decorate([
    (0, common_1.Controller)('/chapter'),
    __metadata("design:paramtypes", [services_1.ChapterService])
], ChapterController);
//# sourceMappingURL=chapter.controller.js.map