"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const users_1 = require("../users");
const services_1 = require("./services");
const strategies_1 = require("./strategies");
const interceptors_1 = require("./interceptors");
const controllers_1 = require("./controllers");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_1.UsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET || 'matkhaubimat',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [controllers_1.AuthController],
        providers: [services_1.AuthService, strategies_1.JwtStrategy, strategies_1.RefreshTokenStrategy, interceptors_1.TokenInterceptor],
        exports: [services_1.AuthService, interceptors_1.TokenInterceptor],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map