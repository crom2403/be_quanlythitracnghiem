import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudyGroupDto {
  @ApiProperty({ example: 'Nhóm 1' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Thứ 2 ca 1' })
  @IsOptional()
  note: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  teacher_id: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  subject_id: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  semester_id: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  academic_year_id: number;
}
