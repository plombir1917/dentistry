import { Module } from '@nestjs/common';
import { AppointmentModule } from 'src/api/appointment/appointment.module';
import { CardModule } from './card/card.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { ServiceModule } from './service/service.module';
import { ToothModule } from './tooth/tooth.module';

@Module({
  imports: [
    AppointmentModule,
    CardModule,
    DoctorModule,
    PatientModule,
    ServiceModule,
    ToothModule,
  ],
})
export class ApiModule {}
