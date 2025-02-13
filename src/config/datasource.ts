import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

// Cấu hình cho CLI
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // Khai báo entities trực tiếp
  //   entities: [User],
  // Hoặc sử dụng glob pattern
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
});
