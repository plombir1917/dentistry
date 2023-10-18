import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from '../appointment/entities/appointment.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  insurance: number;

  @Column({ type: 'timestamp' })
  birth: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointment: Appointment[];
}
