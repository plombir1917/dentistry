import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateToothDto {
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsString()
  @IsNotEmpty()
  condition: string;
}
