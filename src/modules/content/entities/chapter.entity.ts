import { Question } from './question.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';
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
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Subject, { onDelete: 'NO ACTION' })
  subject: Subject;

  @Column()
  name: string;

  @OneToMany(() => Question, (question) => question.chapter)
  questions: Question[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
