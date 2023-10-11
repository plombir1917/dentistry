import { Module } from '@nestjs/common';
import { ToothService } from './tooth.service';
import { ToothController } from './tooth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tooth } from './entities/tooth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tooth])],
  controllers: [ToothController],
  providers: [ToothService],
})
export class ToothModule {}
