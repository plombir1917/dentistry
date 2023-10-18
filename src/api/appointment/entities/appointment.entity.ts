import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AppointmentTooth } from './appointment_tooth.entity';
import { AppointmentService } from './appointment_service.entity';
import { Patient } from 'src/api/patient/patient.entity';
import { Card } from 'src/api/card/card.entity';
import { Doctor } from 'src/api/doctor/doctor.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz' })
  date: Date;

  @Column()
  status: string;

  @Column()
  description: string;

  @ManyToOne(() => Patient, (patient) => patient.appointment)
  @JoinColumn()
  patient: Patient;

  @OneToMany(() => Card, (card) => card.appointment)
  card: Card[];

  @ManyToOne(() => Doctor, (doctor) => doctor.appointment)
  @JoinColumn()
  doctor: Doctor;

  @OneToMany(
    () => AppointmentTooth,
    (appointmentTooth) => appointmentTooth.appointment,
  )
  appointmentTooth: AppointmentTooth[];

  @OneToMany(
    () => AppointmentService,
    (appointmentService) => appointmentService.appointment,
  )
  appointmentService: AppointmentService[];
}
