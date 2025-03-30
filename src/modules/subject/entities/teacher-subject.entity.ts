import { Subject } from './subject.entity';
import { User } from 'src/modules/users/entities';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TeacherSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (teacher) => teacher.teacher_subjects, {
    nullable: false,
  })
  teacher: User;

  @ManyToOne(() => Subject, (subject) => subject.teacher_subjects, {
    nullable: false,
  })
  subject: Subject;

  @CreateDateColumn()
  created_at: Date;
}
