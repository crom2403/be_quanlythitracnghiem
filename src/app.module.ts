import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config';
import { SubjectModule } from './modules/subject';
import { StudyGroupModule } from './modules/study-group';
import { ExamModule } from './modules/exam';
import { ContentModule } from './modules/content';
import { AuthModule } from './modules/auth';
import { UsersModule } from './modules/users';
import { PermissionsModule } from './modules/permissions';
import { NotificationModule } from './modules/notification';

import { JwtAuthGuard } from './modules/auth/guards';
import { TokenInterceptor } from './modules/auth/interceptors';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeOrmConfig,
      inject: [ConfigService],
    }),
    PermissionsModule,
    SubjectModule,
    NotificationModule,
    StudyGroupModule,
    ExamModule,
    ContentModule,
    AuthModule,
    UsersModule,
  ],

  providers: [
    // JWT Guard global
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // Token Interceptor global
    {
      provide: APP_INTERCEPTOR,
      useClass: TokenInterceptor,
    },
  ],
})
export class AppModule {}
