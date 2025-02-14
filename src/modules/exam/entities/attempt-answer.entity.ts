import { Answer } from 'src/modules/content/entities/answer.entity';
import { Question } from 'src/modules/content/entities/question.entity';
import { ExamAttempt } from 'src/modules/exam/entities/exam-attempt.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AttemptAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ExamAttempt)
  attempt: ExamAttempt;

  @ManyToOne(() => Question)
  question: Question;

  @ManyToOne(() => Answer)
  answer: Answer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
