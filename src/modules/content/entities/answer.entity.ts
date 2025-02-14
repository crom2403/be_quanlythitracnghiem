import { Question } from 'src/modules/content/entities/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Question)
  question: Question;

  @Column('text')
  content: string;

  @Column()
  is_correct: boolean;

  @Column()
  order_index: number;
}
