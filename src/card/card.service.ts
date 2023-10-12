import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>,
  ) {}
  create(createCardDto: CreateCardDto) {
    const newCard = this.cardRepository.create(createCardDto);
    return this.cardRepository.save(newCard);
  }

  async findAll() {
    const cards = await this.cardRepository.find();
    if (!cards.length) {
      throw new NotFoundException('Ещё нет ни одной карточки!');
    }
    return this.cardRepository.find();
  }

  async findOne(id: number) {
    const existCard = await this.cardRepository.findOneBy({ id });
    if (!existCard) {
      throw new NotFoundException('Такой карточки не существует!');
    }
    return existCard;
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    await this.findOne(id);
    if (!Object.keys(updateCardDto).length) {
      throw new BadRequestException('Неверные данные!');
    }
    await this.cardRepository.update(id, updateCardDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.cardRepository.delete(id);
    return 'Карточка успешно удалена!';
  }
}
