import { Chapter } from 'src/modules/content/entities';
import { Exam } from '../entities';
import { ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class ExamChapter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Exam)
  exam: Exam;

  @ManyToOne(() => Chapter)
  chapter: Chapter;
}
