import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
  ) {}
  create(createAppointmentDto: CreateAppointmentDto) {
    const newAppointment =
      this.appointmentRepository.create(createAppointmentDto);
    return this.appointmentRepository.save(newAppointment);
  }

  async findAll() {
    const appointments = await this.appointmentRepository.find();
    if (!appointments.length) {
      throw new NotFoundException('Пока нет ни одной записи!');
    }
    return appointments;
  }

  findOne(id: number) {
    return this.appointmentRepository.findOneBy({ id });
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    const existAppointment = await this.findOne(id);
    if (!existAppointment || !Object.keys(updateAppointmentDto).length) {
      throw new NotFoundException('Такой записи не существует!');
    }
    await this.appointmentRepository.update(id, updateAppointmentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const existAppointment = await this.findOne(id);
    if (existAppointment) {
      await this.appointmentRepository.delete(id);
      return 'Запись успешно удалена!';
    } else throw new NotFoundException('Такой записи не существует!');
  }
}
