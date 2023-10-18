import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Appointment } from '../appointment/entities/appointment.entity';

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
