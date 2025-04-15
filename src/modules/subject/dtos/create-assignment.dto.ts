import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAssignmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  teacher_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  listAssignment: CreateAssignmentItemDto[];
}

export class CreateAssignmentItemDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subject_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isAssign: boolean;
}
