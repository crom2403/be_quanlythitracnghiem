// Rate limiter để chống brute force
import rateLimit from 'express-rate-limit';

export const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 5, // Giới hạn 5 lần login sai
  message: 'Quá nhiều lần đăng nhập thất bại, vui lòng thử lại sau 15 phút',
});
