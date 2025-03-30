import { Question } from 'src/modules/content/entities';
import { Exam } from '../entities';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExamQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_index: number;

  @Column()
  points: number;

  @ManyToOne(() => Exam)
  exam: Exam;

  @ManyToOne(() => Question)
  question: Question;
}
