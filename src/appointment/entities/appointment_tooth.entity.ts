import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from './appointment.entity';
import { Tooth } from 'src/tooth/entities/tooth.entity';

@Entity()
export class AppointmentTooth {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Appointment, (appointment) => appointment.appointmentTooth)
  @JoinColumn()
  appointment: Appointment;

  @ManyToOne(() => Tooth, (tooth) => tooth.appointmentTooth)
  @JoinColumn()
  tooth: Tooth;
}
