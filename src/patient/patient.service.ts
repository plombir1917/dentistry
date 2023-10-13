import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  create(createPatientDto: CreatePatientDto) {
    const newPatient = this.patientRepository.create(createPatientDto);
    return this.patientRepository.save(newPatient);
  }

  async findAll() {
    const patients = await this.patientRepository.find();
    if (!patients.length) {
      throw new NotFoundException('Нет ни одного пациента!');
    }
    return patients;
  }

  async findOne(id: number) {
    const existPatient = await this.patientRepository.findOneBy({ id });
    if (!existPatient) {
      throw new NotFoundException('Такого пациента не существует!');
    }
    return existPatient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    await this.findOne(id);
    if (!Object.keys(updatePatientDto).length) {
      throw new BadRequestException('Неверные данные!');
    }
    await this.patientRepository.update(id, updatePatientDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.patientRepository.delete(id);
    return 'Пациент успешно удалён';
  }
}
