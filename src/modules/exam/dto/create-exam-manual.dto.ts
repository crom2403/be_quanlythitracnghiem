import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateExamManualDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  start_time: string;

  @ApiProperty()
  @IsNotEmpty()
  end_time: string;

  @ApiProperty()
  @IsNotEmpty()
  duration_minutes: number;

  @ApiProperty()
  @IsNotEmpty()
  is_shuffled_question: boolean;

  @ApiProperty()
  @IsNotEmpty()
  is_shuffled_answer: boolean;

  @ApiProperty()
  @IsNotEmpty()
  allow_review: boolean;

  @ApiProperty()
  @IsNotEmpty()
  allow_review_point: boolean;

  @ApiProperty()
  @IsNotEmpty()
  exam_type: string; // tự động hay thủ công , auto, manual

  @ApiProperty()
  @IsNotEmpty()
  listIdStudyGroups: number[];

  @ApiProperty()
  @IsNotEmpty()
  listExamConfigs: ExamConfigsType[];
}

export type ExamConfigsType = {
  difficulty_level: 'easy' | 'medium' | 'hard';
  question_count: number;
};
