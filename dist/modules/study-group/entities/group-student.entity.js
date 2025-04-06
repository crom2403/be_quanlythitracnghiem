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
exports.GroupStudent = void 0;
const study_group_entity_1 = require("./study-group.entity");
const entities_1 = require("../../users/entities");
const typeorm_1 = require("typeorm");
let GroupStudent = class GroupStudent {
};
exports.GroupStudent = GroupStudent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GroupStudent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => study_group_entity_1.StudyGroup, (study_group) => study_group.group_students, {
        nullable: false,
    }),
    __metadata("design:type", study_group_entity_1.StudyGroup)
], GroupStudent.prototype, "study_group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (student) => student.group_students, {
        nullable: false,
    }),
    __metadata("design:type", entities_1.User)
], GroupStudent.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GroupStudent.prototype, "joined_at", void 0);
exports.GroupStudent = GroupStudent = __decorate([
    (0, typeorm_1.Entity)()
], GroupStudent);
//# sourceMappingURL=group-student.entity.js.map