import { Question } from 'src/modules/content/entities/question.entity';
import { Exam } from 'src/modules/exam/entities/exam.entity';
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
