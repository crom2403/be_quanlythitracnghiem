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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamStudyGroup = void 0;
const entities_1 = require("../entities");
const entities_2 = require("../../study-group/entities");
const typeorm_1 = require("typeorm");
let ExamStudyGroup = class ExamStudyGroup {
};
exports.ExamStudyGroup = ExamStudyGroup;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamStudyGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Exam, (exam) => exam.exam_study_groups),
    __metadata("design:type", entities_1.Exam)
], ExamStudyGroup.prototype, "exam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_2.StudyGroup, (study_group) => study_group.exam_study_group),
    __metadata("design:type", entities_2.StudyGroup)
], ExamStudyGroup.prototype, "study_group", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ExamStudyGroup.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ExamStudyGroup.prototype, "updated_at", void 0);
exports.ExamStudyGroup = ExamStudyGroup = __decorate([
    (0, typeorm_1.Entity)()
], ExamStudyGroup);
//# sourceMappingURL=exams-study-groups.entity.js.map