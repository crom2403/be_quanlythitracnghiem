"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRateLimiter = void 0;
const express_rate_limit_1 = require("express-rate-limit");
exports.loginRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Quá nhiều lần đăng nhập thất bại, vui lòng thử lại sau 15 phút',
});
//# sourceMappingURL=rate-limiter.middleware.js.map