import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}
  create(createServiceDto: CreateServiceDto) {
    const newService = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(newService);
  }

  async findAll() {
    const services = await this.serviceRepository.find();
    if (!services.length) {
      throw new NotFoundException('Нет ни одной услуги!');
    }
    return services;
  }

  async findOne(id: number) {
    const existService = this.serviceRepository.findOneBy({ id });
    if (!existService) {
      throw new NotFoundException('Такого пользователя не существует!');
    }
    return existService;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    await this.findOne(id);
    if (!Object.keys(updateServiceDto).length) {
      throw new BadRequestException('Неверные данные!');
    }
    await this.serviceRepository.update(id, updateServiceDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.serviceRepository.delete(id);
    return 'Услуга успешно удалена';
  }
}
