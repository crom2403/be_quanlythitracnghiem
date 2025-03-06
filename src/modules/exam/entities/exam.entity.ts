import { ExamConfig } from 'src/modules/exam/entities/exam-config.entity';
import { ExamQuestion } from 'src/modules/exam/entities/exam-question.entity';
import { ExamStudyGroup } from 'src/modules/exam/entities/exams-study-groups.entity';
import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
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
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  duration_minutes: number;

  @Column()
  is_shuffled_question: boolean;

  @Column()
  is_shuffled_answer: boolean;

  @Column()
  allow_review: boolean;

  @Column()
  allow_review_point: boolean;

  @Column({ type: 'enum', enum: ['manual', 'auto'] })
  exam_type: string;

  @ManyToOne(() => User)
  created_by: User;

  @OneToMany(
    () => ExamStudyGroup,
    (exam_study_group) => exam_study_group.exam,
    {
      cascade: true,
    },
  )
  exam_study_groups: StudyGroup[];

  @OneToMany(() => ExamConfig, (exam_config) => exam_config.exam)
  exam_configs: ExamConfig[];

  @OneToMany(() => ExamQuestion, (exam_question) => exam_question.exam)
  exam_questions: ExamQuestion[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
