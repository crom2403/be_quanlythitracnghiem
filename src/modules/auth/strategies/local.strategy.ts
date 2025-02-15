import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // LocalStrategy được sử dụng để xác thực người dùng thông qua tên người dùng và mật khẩu.
  constructor(private authService: AuthService) {
    super({
      // Có thể custom tên field (mặc định là username/password)
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  // Phương thức validate sẽ được Passport tự động gọi
  async validate(email: string, password: string): Promise<any> {
    // Gọi service để verify credentials
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Email hoặc mật khẩu không đúng');
    }

    // Nếu xác thực thành công, trả về user
    return user;
  }
}
