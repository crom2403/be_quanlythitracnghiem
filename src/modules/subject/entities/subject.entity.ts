import { Chapter } from 'src/modules/content/entities/chapter.entity';

import { TeacherSubject } from './teacher-subject.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public_id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  credits: number;

  @Column({ default: 0 })
  theory_hours: number;

  @Column({ default: 0 })
  practical_hours: number;

  @OneToMany(
    () => TeacherSubject,
    (teacher_subject) => teacher_subject.subject,
    { cascade: true },
  )
  teacher_subjects: TeacherSubject[];

  @OneToMany(() => Chapter, (chapter) => chapter.subject, { cascade: true })
  chapters: Chapter[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
