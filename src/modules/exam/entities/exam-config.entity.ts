import { Exam } from '../entities';
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
