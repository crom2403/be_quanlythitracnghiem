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
exports.Exam = void 0;
const entities_1 = require("../entities");
const entities_2 = require("../../users/entities");
const typeorm_1 = require("typeorm");
let Exam = class Exam {
};
exports.Exam = Exam;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Exam.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exam.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exam.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exam.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Exam.prototype, "duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Exam.prototype, "is_shuffled_question", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Exam.prototype, "is_shuffled_answer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Exam.prototype, "allow_review", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Exam.prototype, "allow_review_point", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['manual', 'auto'] }),
    __metadata("design:type", String)
], Exam.prototype, "exam_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_2.User),
    __metadata("design:type", entities_2.User)
], Exam.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.ExamStudyGroup, (exam_study_group) => exam_study_group.exam, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Exam.prototype, "exam_study_groups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.ExamConfig, (exam_config) => exam_config.exam),
    __metadata("design:type", Array)
], Exam.prototype, "exam_configs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.ExamQuestion, (exam_question) => exam_question.exam),
    __metadata("design:type", Array)
], Exam.prototype, "exam_questions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.ExamAttempt, (exam_attempt) => exam_attempt.exam),
    __metadata("design:type", Array)
], Exam.prototype, "exam_attempts", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Exam.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Exam.prototype, "updated_at", void 0);
exports.Exam = Exam = __decorate([
    (0, typeorm_1.Entity)()
], Exam);
//# sourceMappingURL=exam.entity.js.map