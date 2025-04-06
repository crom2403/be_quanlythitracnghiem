"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmConfig = void 0;
const getTypeOrmConfig = async (configService) => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    logging: false,
    logger: 'advanced-console',
    extra: {
        connectionLimit: 10,
    },
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    migrationsRun: true,
});
exports.getTypeOrmConfig = getTypeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map