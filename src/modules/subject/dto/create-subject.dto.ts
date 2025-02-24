import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty()
  @IsNotEmpty()
  public_id: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  credits: number;

  @ApiProperty()
  @IsNotEmpty()
  theory_hours: number;

  @ApiProperty()
  @IsNotEmpty()
  practical_hours: number;
}
