import { Question } from 'src/modules/content/entities/question.entity';
import { Exam } from 'src/modules/exam/entities/exam.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class ExamQuestion {
  @PrimaryColumn()
  exam_id: number;

  @PrimaryColumn()
  question_id: number;

  @ManyToOne(() => Exam)
  exam: Exam;

  @ManyToOne(() => Question)
  question: Question;

  @Column()
  order_index: number;

  @Column()
  points: number;
}
