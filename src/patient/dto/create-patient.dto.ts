import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  insurance: number;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  birth: Date;
}
