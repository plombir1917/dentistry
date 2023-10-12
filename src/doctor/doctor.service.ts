import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}
  create(createDoctorDto: CreateDoctorDto) {
    const newDoctor = this.doctorRepository.create(createDoctorDto);
    return this.doctorRepository.save(newDoctor);
  }

  async findAll() {
    const doctors = await this.doctorRepository.find();
    if (!doctors.length) {
      throw new NotFoundException('Ещё нет ни одного доктора');
    }
    return doctors;
  }

  async findOne(id: number) {
    const existDoctor = await this.doctorRepository.findOneBy({ id });
    if (!existDoctor) {
      throw new NotFoundException('Такого доктора не существует!');
    }
    return existDoctor;
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    await this.findOne(id);
    if (!Object.keys(updateDoctorDto).length) {
      throw new BadRequestException('Неверные данные!');
    }
    await this.doctorRepository.update(id, updateDoctorDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.doctorRepository.delete(id);
    return `Доктор успешно удалён`;
  }
}
