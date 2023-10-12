import { Card } from 'src/card/entities/card.entity';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AppointmentService } from './appointment_service.entity';
import { AppointmentTooth } from './appointment_tooth.entity';

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
  card: Card;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointment)
  @JoinColumn()
  doctor: Doctor;

  @OneToMany(
    () => AppointmentService,
    (appointmentService) => appointmentService.appointment,
  )
  appointmentService: AppointmentService;

  @OneToMany(
    () => AppointmentTooth,
    (appointmentTooth) => appointmentTooth.appointment,
  )
  appointmentTooth: AppointmentTooth;
}
