import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StudyGroup)
  group: StudyGroup;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  duration_minutes: number;

  @Column()
  is_shuffled: boolean;

  @Column()
  allow_review: boolean;

  @Column({ type: 'enum', enum: ['manual', 'auto'] })
  exam_type: string;

  @ManyToOne(() => User)
  created_by: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
