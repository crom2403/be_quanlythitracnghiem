import { Chapter } from 'src/modules/content/entities/chapter.entity';
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
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Chapter)
  chapter: Chapter;

  @Column('text')
  content: string;

  @Column({ type: 'enum', enum: ['easy', 'medium', 'hard'] })
  difficulty_level: string;

  @ManyToOne(() => User)
  created_by: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
