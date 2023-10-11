import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  insurance: number;

  @Column()
  birth: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointment: Appointment;
}
