import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshTokenStrategy } from 'src/modules/auth/strategies/refresh-token.strategy';
import { TokenInterceptor } from 'src/modules/auth/interceptors/token.interceptor';
import { AuthController } from 'src/modules/auth/auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true, // Để có thể sử dụng JwtService ở mọi nơi
      secret: process.env.JWT_SECRET || 'matkhaubimat',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RefreshTokenStrategy, TokenInterceptor],
  exports: [AuthService, TokenInterceptor],
})
export class AuthModule {}
