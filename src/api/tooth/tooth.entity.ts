import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppointmentTooth } from '../appointment/entities/appointment_tooth.entity';

@Entity()
export class Tooth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column()
  condition: string;

  @OneToMany(
    () => AppointmentTooth,
    (appointmentTooth) => appointmentTooth.tooth,
  )
  appointmentTooth: AppointmentTooth[];
}
