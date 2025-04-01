import { Exclude } from 'class-transformer';
import { GroupStudent } from 'src/modules/study-group/entities';
import { TeacherSubject } from 'src/modules/subject/entities';
import { Role } from './role.entity';
import { ExamAttempt } from 'src/modules/exam/entities';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, default: 'STU000' }) // Giá trị mặc định cho student_code
  student_code: string;

  @Column({ default: '' }) // Giá trị mặc định là chuỗi rỗng cho email
  email: string;

  @Column({ default: 'Unknown' }) // Giá trị mặc định cho fullname
  fullname: string;

  @Column({ default: 'Nam' }) // Giá trị mặc định là 'Nam' cho gender
  gender: 'Nam' | 'Nữ';

  @Column({ type: 'date', default: () => "'2000-01-01'" }) // Giá trị mặc định cho birthday
  birthday: Date;

  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'SET NULL' }) // Nếu role bị xóa, cột role_id trong users sẽ trở thành NULL thay vì xóa user.
  role: Role;

  @OneToMany(
    () => TeacherSubject,
    (teacher_subject) => teacher_subject.teacher,
    { cascade: true },
  )
  teacher_subjects: TeacherSubject[];

  @Column()
  @Exclude() // Loại trừ password khỏi response
  password: string;

  @Column({ default: true })
  status: boolean;

  @Column({ nullable: true, default: null })
  avatar: string;

  @Column({ nullable: true })
  @Exclude() // Loại trừ password khỏi response
  refreshToken: string;

  @OneToMany(() => GroupStudent, (group_student) => group_student.student)
  group_students: GroupStudent[];

  @OneToMany(() => ExamAttempt, (exam_attempt) => exam_attempt.user)
  exam_attempts: ExamAttempt[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
