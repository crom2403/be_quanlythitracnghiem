import { Subject } from 'src/modules/subject/entities/subject.entity';
import { User } from 'src/modules/users/entities/user.entity';
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
