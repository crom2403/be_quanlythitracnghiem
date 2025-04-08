// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/filters';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Cấu hình Global Prefix
  app.setGlobalPrefix('api/v1');

  // Cấu hình CORS
  app.enableCors({
    origin: configService.get('CORS_ORIGINS', '*'),
    // origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: '*',
    exposedHeaders: 'Content-Type, Authorization',
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

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('quanlythitracngiem API documentation')
    .setDescription('')
    .setVersion('1.0')
    .addBearerAuth() // Thêm Bearer Auth vào Swagger UI
    // .addSecurityRequirements('public', [])
    .addTag('quanlythitracnghiem')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, documentFactory);

  // Khởi động server
  const port = configService.get('PORT', 3000);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api/v1`);
}
bootstrap();
