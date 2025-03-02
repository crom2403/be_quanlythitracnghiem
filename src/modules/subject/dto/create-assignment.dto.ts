import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAssignmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subject_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isAssign: boolean;
}
