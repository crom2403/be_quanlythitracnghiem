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
exports.Chapter = void 0;
const question_entity_1 = require("./question.entity");
const entities_1 = require("../../subject/entities");
const typeorm_1 = require("typeorm");
let Chapter = class Chapter {
};
exports.Chapter = Chapter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Chapter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Subject, { onDelete: 'NO ACTION' }),
    __metadata("design:type", entities_1.Subject)
], Chapter.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chapter.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => question_entity_1.Question, (question) => question.chapter),
    __metadata("design:type", Array)
], Chapter.prototype, "questions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Chapter.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Chapter.prototype, "updated_at", void 0);
exports.Chapter = Chapter = __decorate([
    (0, typeorm_1.Entity)()
], Chapter);
//# sourceMappingURL=chapter.entity.js.map