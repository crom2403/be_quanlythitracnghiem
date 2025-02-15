import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Lấy token từ Authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Kiểm tra token hết hạn
      secretOrKey: process.env.JWT_SECRET, // Khóa để verify token
    });
  }

  // Hàm validate được gọi sau khi token được verify thành công
  async validate(payload: any) {
    console.log(payload);
    return {
      userId: payload.sub,
      username: payload.username,
      roles: payload.roles,
    };
  }
}
