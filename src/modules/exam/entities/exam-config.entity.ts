import { Chapter } from 'src/modules/content/entities/chapter.entity';
import { Exam } from 'src/modules/exam/entities/exam.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExamConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Exam)
  exam: Exam;

  @ManyToOne(() => Chapter)
  chapter: Chapter;

  @Column({ type: 'enum', enum: ['easy', 'medium', 'hard'] })
  difficulty_level: string;

  @Column()
  question_count: number;
}
