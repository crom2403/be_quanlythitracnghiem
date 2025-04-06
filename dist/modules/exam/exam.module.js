"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const entities_1 = require("./entities");
const study_group_1 = require("../study-group");
const users_1 = require("../users");
const subject_1 = require("../subject");
const content_1 = require("../content");
let ExamModule = class ExamModule {
};
exports.ExamModule = ExamModule;
exports.ExamModule = ExamModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.AttemptAnswer,
                entities_1.ExamAttempt,
                entities_1.ExamChapter,
                entities_1.ExamConfig,
                entities_1.ExamQuestion,
                entities_1.Exam,
                entities_1.ExamStudyGroup,
            ]),
            study_group_1.StudyGroupModule,
            subject_1.SubjectModule,
            users_1.UsersModule,
            content_1.ContentModule,
        ],
        controllers: [controllers_1.ExamController, controllers_1.ExamAttemptController],
        providers: [services_1.ExamService, services_1.ExamAttemptService],
        exports: [typeorm_1.TypeOrmModule, services_1.ExamService, services_1.ExamAttemptService],
    })
], ExamModule);
//# sourceMappingURL=exam.module.js.map