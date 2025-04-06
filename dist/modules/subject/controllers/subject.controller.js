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
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("../../../common/dtos");
const dtos_2 = require("../dtos");
const services_1 = require("../services");
let SubjectController = class SubjectController {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    async findAll(paginationDto) {
        return await this.subjectService.getAll(paginationDto);
    }
    async findOne(id) {
        const subject = await this.subjectService.getById(+id);
        if (!subject) {
            throw new common_1.NotFoundException('Subject not found');
        }
        else {
            return subject;
        }
    }
    async assignTeacherToSubject(req, createAssignmentDto) {
        const userId = req.user?.sub.userId;
        return await this.subjectService.createAssignment(userId, createAssignmentDto);
    }
    async create(createSubjectDto) {
        return await this.subjectService.create(createSubjectDto);
    }
    remove(id) {
        return this.subjectService.delete(+id);
    }
    update(id, updateSubjectDto) {
        return this.subjectService.update(+id, updateSubjectDto);
    }
};
exports.SubjectController = SubjectController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('assign-teacher'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "assignTeacherToSubject", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_2.CreateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Subject deleted successfully.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubjectController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Subject updated successfully.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_2.CreateSubjectDto]),
    __metadata("design:returntype", void 0)
], SubjectController.prototype, "update", null);
exports.SubjectController = SubjectController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('subject'),
    __metadata("design:paramtypes", [services_1.SubjectService])
], SubjectController);
//# sourceMappingURL=subject.controller.js.map