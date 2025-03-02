import { Exclude } from 'class-transformer';
import { GroupStudent } from 'src/modules/study-group/entities/group-student.entity';
import { TeacherSubject } from 'src/modules/subject/entities/teacher-subject.entity';
import { Role } from 'src/modules/users/entities/role.entity';
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

  @Column({ unique: true })
  student_code: string;

  @Column({ unique: true })
  email: string;

  @Column()
  fullname: string;

  @Column()
  gender: 'Nam' | 'Nữ';

  @Column()
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

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  @Exclude() // Loại trừ password khỏi response
  refreshToken: string;

  @OneToMany(() => GroupStudent, (group_student) => group_student.student)
  group_students: GroupStudent[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
