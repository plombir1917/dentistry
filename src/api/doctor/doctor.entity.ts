import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from '../appointment/entities/appointment.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointment: Appointment[];
}
