import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { SubjectModule } from './modules/subject/subject.module';
import { NotificationModule } from './modules/notification/notification.module';
import { StudyGroupModule } from './modules/study-group/study-group.module';
import { ExamModule } from './modules/exam/exam.module';
import { ContentModule } from './modules/content/content.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from 'src/modules/users/users.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { TokenInterceptor } from 'src/modules/auth/interceptors/token.interceptor';

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
  controllers: [AppController],
  providers: [
    AppService,
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
