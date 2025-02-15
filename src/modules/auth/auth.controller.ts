/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/modules/auth/auth.service';
import { GetCurrentUser } from 'src/modules/auth/decorators/get-current-user.decorator';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { loginRateLimiter } from 'src/modules/auth/middleware/rate-limiter.middleware';

// Controller xử lý các route authentication
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Route đăng nhập: /auth/login
  // - Không cần xác thực (@Public())
  // - Nhận email và password từ body
  @Public()
  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  // Route đăng xuất: /auth/logout
  // - Yêu cầu access token hợp lệ
  // - Lấy userId từ token thông qua decorator
  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  async logout(@GetCurrentUser('sub') userId: number) {
    return this.authService.logout(userId);
  }

  // Route refresh token: /auth/refresh
  // - Không cần access token (@Public())
  // - Yêu cầu refresh token hợp lệ
  // - Lấy userId và refreshToken từ token
  @Public()
  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  async refreshTokens(
    @GetCurrentUser('sub') userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
