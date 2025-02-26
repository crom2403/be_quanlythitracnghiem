/* eslint-disable @typescript-eslint/no-unused-vars */
import { Exclude } from 'class-transformer';
import { Question } from 'src/modules/content/entities/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Question, (question) => question.answers, {
  //   onDelete: 'CASCADE',
  // })
  // @Exclude() // Đánh dấu để không serialize khi JSON.stringify()
  @Column()
  questionId: number;

  @Column('text')
  content: string;

  @Column()
  is_correct: boolean;

  @Column()
  order_index: number;
}
