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
  answers: {
    content: string;
    is_correct: boolean;
  }[];

  @ApiProperty()
  @IsNotEmpty()
  difficulty_level: string;
}
