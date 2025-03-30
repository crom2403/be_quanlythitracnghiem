import { Exam } from '../entities';
import { StudyGroup } from 'src/modules/study-group/entities';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ExamStudyGroup {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Exam, (exam) => exam.exam_study_groups)
  exam: Exam;

  @ManyToOne(() => StudyGroup, (study_group) => study_group.exam_study_group)
  study_group: StudyGroup;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
