import { Answer, Question } from 'src/modules/content/entities';
import { ExamAttempt } from '../entities';
import {
  Column,
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

  @Column()
  is_selected: boolean;

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
