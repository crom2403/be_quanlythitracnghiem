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
exports.Question = void 0;
const answer_entity_1 = require("./answer.entity");
const chapter_entity_1 = require("./chapter.entity");
const entities_1 = require("../../users/entities");
const typeorm_1 = require("typeorm");
let Question = class Question {
};
exports.Question = Question;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Question.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['easy', 'medium', 'hard'] }),
    __metadata("design:type", String)
], Question.prototype, "difficulty_level", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chapter_entity_1.Chapter, (chapter) => chapter.questions, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", chapter_entity_1.Chapter)
], Question.prototype, "chapter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User),
    __metadata("design:type", entities_1.User)
], Question.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.Answer, (answer) => answer.question),
    __metadata("design:type", Array)
], Question.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Question.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Question.prototype, "updated_at", void 0);
exports.Question = Question = __decorate([
    (0, typeorm_1.Entity)()
], Question);
//# sourceMappingURL=question.entity.js.map