import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ToothService } from './tooth.service';
import { CreateToothDto } from './dto/create-tooth.dto';
import { UpdateToothDto } from './dto/update-tooth.dto';

@Controller('tooth')
export class ToothController {
  constructor(private readonly toothService: ToothService) {}

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  create(@Body() createToothDto: CreateToothDto) {
    return this.toothService.create(createToothDto);
  }

  @Get()
  findAll() {
    return this.toothService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toothService.findOne(+id);
  }

  @UsePipes(
    new ValidationPipe({ whitelist: true, skipMissingProperties: true }),
  )
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToothDto: UpdateToothDto) {
    return this.toothService.update(+id, updateToothDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toothService.remove(+id);
  }
}
