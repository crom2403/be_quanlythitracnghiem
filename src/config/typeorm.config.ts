import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // synchronize: process.env.NODE_ENV !== 'production', // Không dùng synchronize trong production
  // logging: process.env.NODE_ENV !== 'production',
  logging: false,
  logger: 'advanced-console',
  // Cấu hình pool connection
  extra: {
    connectionLimit: 10,
  },
  // Cấu hình migrations
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  migrationsRun: true,
});
