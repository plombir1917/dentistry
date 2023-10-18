import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ApiModule } from './api/api.module';
import { DataSource } from 'typeorm';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, DatabaseModule, ApiModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
