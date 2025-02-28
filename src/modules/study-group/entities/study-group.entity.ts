import { AcademicYear } from 'src/modules/study-group/entities/academic-year.entity';
import { GroupStudent } from 'src/modules/study-group/entities/group-student.entity';
import { Semester } from 'src/modules/study-group/entities/semester.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';
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
export class StudyGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Subject)
  subject: Subject;

  @ManyToOne(() => User)
  teacher: User;

  @Column()
  name: string;

  @Column()
  note: string;

  @Column({ unique: true })
  invite_code: string;

  @ManyToOne(() => Semester, (semester) => semester.study_groups)
  semester: Semester;

  @ManyToOne(() => AcademicYear, (academic_year) => academic_year.study_groups)
  academic_year: AcademicYear;

  @OneToMany(() => GroupStudent, (group_student) => group_student.study_group, {
    cascade: true,
  })
  group_students: GroupStudent;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
