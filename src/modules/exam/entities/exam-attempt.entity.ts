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

@Entity('exam_attempt')
export class ExamAttempt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  test_time: number;

  @Column()
  score: number;

  @Column()
  tab_switch_count: number;

  @ManyToOne(() => Exam, (exam) => exam.exam_attempts)
  exam: Exam;

  @ManyToOne(() => User, (user) => user.exam_attempts)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
