import { Exam } from '../entities';
import { User } from 'src/modules/users/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ExamAttempt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  score: number;

  @Column()
  tab_switch_count: number;

  @Column({
    type: 'enum',
    enum: ['in_progress', 'completed', 'auto_submitted'],
  })
  status: string;

  @ManyToOne(() => Exam, (exam) => exam.exam_attempts)
  exam: Exam;

  @ManyToOne(() => User, (user) => user.exam_attempts)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
