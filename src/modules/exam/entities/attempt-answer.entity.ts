import { Answer, Question } from 'src/modules/content/entities';
import { ExamAttempt } from '../entities';
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
