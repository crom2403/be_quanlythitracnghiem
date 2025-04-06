"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const filters_1 = require("./common/filters");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.setGlobalPrefix('api/v1');
    app.enableCors({
        origin: configService.get('CORS_ORIGINS', '*'),
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.useGlobalFilters(new filters_1.GlobalExceptionFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('quanlythitracngiem API documentation')
        .setDescription('')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('quanlythitracnghiem')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/v1', app, documentFactory);
    const port = configService.get('PORT', 3000);
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}/api/v1`);
}
bootstrap();
//# sourceMappingURL=main.js.map