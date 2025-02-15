// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Cấu hình Global Prefix
  app.setGlobalPrefix('api/v1');

  // Cấu hình CORS
  app.enableCors({
    origin: configService.get('CORS_ORIGINS', '*'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Cấu hình Validation Pipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Loại bỏ các property không được định nghĩa trong DTO
      transform: true, // Tự động transform các types
      forbidNonWhitelisted: true, // Throw error nếu có property không được whitelist
      transformOptions: {
        enableImplicitConversion: true, // Cho phép convert type ngầm định
      },
    }),
  );

  // Áp dụng Global Exception Filter
  app.useGlobalFilters(new GlobalExceptionFilter());

  // Khởi động server
  const port = configService.get('PORT', 3000);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api/v1`);
}
bootstrap();
