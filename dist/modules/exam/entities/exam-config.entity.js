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
exports.ExamConfig = void 0;
const entities_1 = require("../entities");
const typeorm_1 = require("typeorm");
let ExamConfig = class ExamConfig {
};
exports.ExamConfig = ExamConfig;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamConfig.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['easy', 'medium', 'hard'] }),
    __metadata("design:type", String)
], ExamConfig.prototype, "difficulty_level", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExamConfig.prototype, "question_count", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Exam),
    __metadata("design:type", entities_1.Exam)
], ExamConfig.prototype, "exam", void 0);
exports.ExamConfig = ExamConfig = __decorate([
    (0, typeorm_1.Entity)()
], ExamConfig);
//# sourceMappingURL=exam-config.entity.js.map