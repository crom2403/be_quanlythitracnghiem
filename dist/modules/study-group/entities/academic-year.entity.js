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
exports.AcademicYear = void 0;
const class_validator_1 = require("class-validator");
const study_group_entity_1 = require("./study-group.entity");
const typeorm_1 = require("typeorm");
let AcademicYear = class AcademicYear {
};
exports.AcademicYear = AcademicYear;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AcademicYear.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AcademicYear.prototype, "start_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", String)
], AcademicYear.prototype, "end_year", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => study_group_entity_1.StudyGroup, (study_group) => study_group.academic_year),
    __metadata("design:type", Array)
], AcademicYear.prototype, "study_groups", void 0);
exports.AcademicYear = AcademicYear = __decorate([
    (0, typeorm_1.Entity)()
], AcademicYear);
//# sourceMappingURL=academic-year.entity.js.map