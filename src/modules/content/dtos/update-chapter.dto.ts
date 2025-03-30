import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateChapterDto {
  @ApiProperty()
  @IsOptional()
  name?: string;
}
