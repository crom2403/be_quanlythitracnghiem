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
exports.TeacherSubject = void 0;
const subject_entity_1 = require("./subject.entity");
const entities_1 = require("../../users/entities");
const typeorm_1 = require("typeorm");
let TeacherSubject = class TeacherSubject {
};
exports.TeacherSubject = TeacherSubject;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TeacherSubject.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (teacher) => teacher.teacher_subjects, {
        nullable: false,
    }),
    __metadata("design:type", entities_1.User)
], TeacherSubject.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subject_entity_1.Subject, (subject) => subject.teacher_subjects, {
        nullable: false,
    }),
    __metadata("design:type", subject_entity_1.Subject)
], TeacherSubject.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TeacherSubject.prototype, "created_at", void 0);
exports.TeacherSubject = TeacherSubject = __decorate([
    (0, typeorm_1.Entity)()
], TeacherSubject);
//# sourceMappingURL=teacher-subject.entity.js.map