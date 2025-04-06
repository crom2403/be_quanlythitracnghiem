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
exports.StudyGroupController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../../../common/dtos");
const dtos_2 = require("../dtos");
const services_1 = require("../services");
let StudyGroupController = class StudyGroupController {
    constructor(studyGroupService) {
        this.studyGroupService = studyGroupService;
    }
    async getStudyGroups(paginationDto) {
        return this.studyGroupService.getAllStudyGroups(paginationDto);
    }
    async getStudyGroupById(id) {
        return this.studyGroupService.getStudyGroupById(+id);
    }
    async createStudyGroup(createStudyGroupDto) {
        return this.studyGroupService.createStudyGroup(createStudyGroupDto);
    }
    async deleteStudyGroup(id) {
        return this.studyGroupService.deleteStudyGroup(+id);
    }
    async addStudentManual(body) {
        return this.studyGroupService.addStudentManual(body);
    }
};
exports.StudyGroupController = StudyGroupController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StudyGroupController.prototype, "getStudyGroups", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudyGroupController.prototype, "getStudyGroupById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_2.CreateStudyGroupDto]),
    __metadata("design:returntype", Promise)
], StudyGroupController.prototype, "createStudyGroup", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudyGroupController.prototype, "deleteStudyGroup", null);
__decorate([
    (0, common_1.Post)('manual'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_2.AddStudentManualDto]),
    __metadata("design:returntype", Promise)
], StudyGroupController.prototype, "addStudentManual", null);
exports.StudyGroupController = StudyGroupController = __decorate([
    (0, common_1.Controller)('study-group'),
    __metadata("design:paramtypes", [services_1.StudyGroupService])
], StudyGroupController);
//# sourceMappingURL=study-group.controller.js.map