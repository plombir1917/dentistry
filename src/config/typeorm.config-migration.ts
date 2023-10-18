import { DataSource } from 'typeorm';
import 'dotenv/config';

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  port: +process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migrations/*.js'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: true,
  logging: true,
  migrationsRun: true,
});
