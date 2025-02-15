import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// Strategy xử lý access token
// - Lấy token từ Authorization header
// - Verify token bằng secret
// - Tự động decode payload
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      // Lấy token từ Authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Kiểm tra token hết hạn
      secretOrKey: process.env.JWT_ACCESS_SECRET, // Khóa để verify token
    });
  }

  // Hàm validate được gọi sau khi token được verify thành công
  async validate(payload: any) {
    console.log(payload);
    return payload;
  }
}
