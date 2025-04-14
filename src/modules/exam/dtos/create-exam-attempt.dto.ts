import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateExamAttemptDto {
  @ApiProperty()
  @IsNotEmpty()
  exam_id: number;
  @ApiProperty()
  @IsNotEmpty()
  start_time: string;
  @ApiProperty()
  @IsNotEmpty()
  end_time: string;
  @ApiProperty()
  @IsNotEmpty()
  test_time: number;
  @ApiProperty()
  @IsNotEmpty()
  tab_switch_count: number;
  @ApiProperty()
  @IsNotEmpty()
  point: number;
  @ApiProperty()
  @IsNotEmpty()
  list_question: QuestionItemDto[];
}

export class QuestionItemDto {
  @ApiProperty()
  @IsNotEmpty()
  question_id: number;

  @ApiProperty()
  @IsNotEmpty()
  answer_id: number;

  @ApiProperty()
  @IsNotEmpty()
  is_selected: boolean;
}
