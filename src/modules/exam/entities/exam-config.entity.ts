import { Exam } from 'src/modules/exam/entities/exam.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExamConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['easy', 'medium', 'hard'] })
  difficulty_level: string;

  @Column()
  question_count: number;

  @ManyToOne(() => Exam)
  exam: Exam;
}
