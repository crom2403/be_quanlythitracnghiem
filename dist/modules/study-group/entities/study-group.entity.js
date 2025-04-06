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
exports.StudyGroup = void 0;
const entities_1 = require("../entities");
const entities_2 = require("../../exam/entities");
const entities_3 = require("../../subject/entities");
const entities_4 = require("../../users/entities");
const typeorm_1 = require("typeorm");
let StudyGroup = class StudyGroup {
};
exports.StudyGroup = StudyGroup;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudyGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_3.Subject),
    __metadata("design:type", entities_3.Subject)
], StudyGroup.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_4.User),
    __metadata("design:type", entities_4.User)
], StudyGroup.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudyGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudyGroup.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], StudyGroup.prototype, "invite_code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Semester, (semester) => semester.study_groups),
    __metadata("design:type", entities_1.Semester)
], StudyGroup.prototype, "semester", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.AcademicYear, (academic_year) => academic_year.study_groups),
    __metadata("design:type", entities_1.AcademicYear)
], StudyGroup.prototype, "academic_year", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.GroupStudent, (group_student) => group_student.study_group, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], StudyGroup.prototype, "group_students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_2.ExamStudyGroup, (exam_study_group) => exam_study_group.study_group, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], StudyGroup.prototype, "exam_study_group", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StudyGroup.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StudyGroup.prototype, "updated_at", void 0);
exports.StudyGroup = StudyGroup = __decorate([
    (0, typeorm_1.Entity)()
], StudyGroup);
//# sourceMappingURL=study-group.entity.js.map