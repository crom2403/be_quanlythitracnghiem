import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/modules/users';
import { AuthService } from './services';
import { RefreshTokenStrategy, JwtStrategy } from './strategies';
import { TokenInterceptor } from './interceptors';
import { AuthController } from './controllers';

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
