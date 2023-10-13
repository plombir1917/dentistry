import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateToothDto } from './dto/create-tooth.dto';
import { UpdateToothDto } from './dto/update-tooth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tooth } from './entities/tooth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToothService {
  constructor(
    @InjectRepository(Tooth)
    private readonly toothRepository: Repository<Tooth>,
  ) {}
  create(createToothDto: CreateToothDto) {
    const newTooth = this.toothRepository.create(createToothDto);
    return this.toothRepository.save(newTooth);
  }

  async findAll() {
    const teeth = await this.toothRepository.find();
    if (!teeth.length) {
      throw new NotFoundException('Нет ни одного зуба!');
    }
    return teeth;
  }

  async findOne(id: number) {
    const existTooth = await this.toothRepository.findOneBy({ id });
    if (!existTooth) {
      throw new NotFoundException('Нет такого зуба!');
    }
    return existTooth;
  }

  async update(id: number, updateToothDto: UpdateToothDto) {
    await this.findOne(id);
    if (!Object.keys(updateToothDto).length) {
      throw new BadRequestException('Неверные данные!');
    }
    await this.toothRepository.update(id, updateToothDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.toothRepository.delete(id);
    return `Зуб успешно удалён`;
  }
}
