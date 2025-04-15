import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty()
  @IsNotEmpty()
  chapterId: number;

  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsNotEmpty({ each: true })
  answers: CreateQuestionItemDto[];

  @ApiProperty()
  @IsNotEmpty()
  difficulty_level: string;
}

export class CreateQuestionItemDto {
  @ApiProperty()
  @IsNotEmpty()
  content: string;
  @ApiProperty()
  @IsNotEmpty()
  is_correct: boolean;
}
