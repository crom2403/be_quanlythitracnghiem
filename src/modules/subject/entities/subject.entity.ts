import { TeacherSubject } from 'src/modules/subject/entities/teacher-subject.entity';
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

  @Column()
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
