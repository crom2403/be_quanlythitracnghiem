/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiExcludeEndpoint, ApiSecurity } from '@nestjs/swagger';
import { AuthService } from 'src/modules/auth/auth.service';
import { GetCurrentUser } from 'src/modules/auth/decorators/get-current-user.decorator';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { LoginDto } from 'src/modules/auth/dto/auth.dto';
import { loginRateLimiter } from 'src/modules/auth/middleware/rate-limiter.middleware';

@Controller('auth')
@ApiSecurity('public') // Đánh dấu tất cả các API trong controller là public
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.student_code, loginDto.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  async logout(@GetCurrentUser('sub') userId: number) {
    return this.authService.logout(userId);
  }

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
