import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddQuestionToExamDto {
  @ApiProperty()
  @IsNotEmpty()
  list_question: ExamQuestionType[];
}

export type ExamQuestionType = {
  question_id: number;
  order_index: number;
};
