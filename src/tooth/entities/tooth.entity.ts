import { AppointmentTooth } from 'src/appointment/entities/appointment_tooth.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  appointmentTooth: AppointmentTooth;
}
