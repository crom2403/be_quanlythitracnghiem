"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const subject_1 = require("../subject");
const users_1 = require("../users");
let ContentModule = class ContentModule {
};
exports.ContentModule = ContentModule;
exports.ContentModule = ContentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([entities_1.Answer, entities_1.Chapter, entities_1.Question]),
            subject_1.SubjectModule,
            users_1.UsersModule,
        ],
        controllers: [controllers_1.ChapterController, controllers_1.QuestionController],
        providers: [services_1.ChapterService, services_1.QuestionService],
        exports: [typeorm_1.TypeOrmModule, services_1.ChapterService, services_1.QuestionService],
    })
], ContentModule);
//# sourceMappingURL=content.module.js.map