import { Answer } from 'src/modules/content/entities/answer.entity';
import { Chapter } from 'src/modules/content/entities/chapter.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column({ type: 'enum', enum: ['easy', 'medium', 'hard'] })
  difficulty_level: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.questions, {
    onDelete: 'CASCADE',
  })
  chapter: Chapter;

  @ManyToOne(() => User)
  created_by: User;

  @OneToMany(() => Answer, (answer) => answer.questionId)
  answers: Answer[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
