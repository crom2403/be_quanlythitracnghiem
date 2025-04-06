"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const config_2 = require("./config");
const subject_1 = require("./modules/subject");
const study_group_1 = require("./modules/study-group");
const exam_1 = require("./modules/exam");
const content_1 = require("./modules/content");
const auth_1 = require("./modules/auth");
const users_1 = require("./modules/users");
const permissions_1 = require("./modules/permissions");
const notification_1 = require("./modules/notification");
const guards_1 = require("./modules/auth/guards");
const interceptors_1 = require("./modules/auth/interceptors");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: config_2.getTypeOrmConfig,
                inject: [config_1.ConfigService],
            }),
            permissions_1.PermissionsModule,
            subject_1.SubjectModule,
            notification_1.NotificationModule,
            study_group_1.StudyGroupModule,
            exam_1.ExamModule,
            content_1.ContentModule,
            auth_1.AuthModule,
            users_1.UsersModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: guards_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: interceptors_1.TokenInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map