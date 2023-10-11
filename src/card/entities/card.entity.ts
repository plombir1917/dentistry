import { Appointment } from 'src/appointment/entities/appointment.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  diagnosis: string;

  @Column()
  conclusion: string;

  @Column()
  recommendations: string;

  @ManyToOne(() => Appointment, (appointment) => appointment.card)
  @JoinColumn()
  appointment: Appointment;
}
