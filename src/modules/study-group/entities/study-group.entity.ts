import { AcademicYear, Semester, GroupStudent } from '../entities';
import { ExamStudyGroup } from 'src/modules/exam/entities';
import { Subject } from 'src/modules/subject/entities';
import { User } from 'src/modules/users/entities';
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
  group_students: GroupStudent[];

  @OneToMany(
    () => ExamStudyGroup,
    (exam_study_group) => exam_study_group.study_group,
    {
      cascade: true,
    },
  )
  exam_study_group: ExamStudyGroup[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
