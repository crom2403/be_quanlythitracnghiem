import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;

  // Thêm thuộc tính subjectId (tùy chọn)
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  subjectId?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  chapterId?: number;

  @IsOptional()
  @Type(() => String)
  @IsString()
  difficulty_level?: string = 'all';

  @IsOptional()
  @Type(() => String)
  @IsString()
  search?: string;

  @IsOptional()
  @Type(() => String)
  @IsString()
  sort?: string;

  @IsOptional()
  @Type(() => String)
  @IsString()
  order?: string;

  @IsOptional()
  @Type(() => String)
  @IsString()
  role_name?: string;
}
