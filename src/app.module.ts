import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './appointment/appointment.module';
import { PatientModule } from './patient/patient.module';
import { ServiceModule } from './service/service.module';
import { DoctorModule } from './doctor/doctor.module';
import { CardModule } from './card/card.module';
import { ToothModule } from './tooth/tooth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    AppointmentModule,
    PatientModule,
    ServiceModule,
    DoctorModule,
    CardModule,
    ToothModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
