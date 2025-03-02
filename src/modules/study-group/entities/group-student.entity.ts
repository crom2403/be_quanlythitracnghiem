import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class GroupStudent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StudyGroup, (study_group) => study_group.group_students, {
    nullable: false,
  })
  study_group: StudyGroup;

  @ManyToOne(() => User, (student) => student.group_students, {
    nullable: false,
  })
  student: User;

  @CreateDateColumn()
  joined_at: Date;
}
