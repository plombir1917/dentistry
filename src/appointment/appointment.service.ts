import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findOne(id: number) {
    const existAppointment = await this.appointmentRepository.findOneBy({ id });
    if (!existAppointment) {
      throw new NotFoundException('Такой записи не существует');
    }
    return this.appointmentRepository.findOneBy({ id });
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    await this.findOne(id);
    if (!Object.keys(updateAppointmentDto).length) {
      throw new BadRequestException('Неверные данные!');
    }
    await this.appointmentRepository.update(id, updateAppointmentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.appointmentRepository.delete(id);
    return 'Запись успешно удалена!';
  }
}
