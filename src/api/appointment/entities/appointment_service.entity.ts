import { Service } from 'src/api/service/service.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from './appointment.entity';

@Entity()
export class AppointmentService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Service, (service) => service.appointmentService)
  @JoinColumn()
  service: Service;

  @ManyToOne(() => Appointment, (appointment) => appointment.appointmentService)
  @JoinColumn()
  appointment: Appointment;
}
