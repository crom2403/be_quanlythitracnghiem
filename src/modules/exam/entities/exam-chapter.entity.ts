import { Chapter } from 'src/modules/content/entities/chapter.entity';
import { Exam } from 'src/modules/exam/entities/exam.entity';
import { ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class ExamChapter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Exam)
  exam: Exam;

  @ManyToOne(() => Chapter)
  chapter: Chapter;
}
