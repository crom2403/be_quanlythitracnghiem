import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class GroupStudent {
  @PrimaryColumn()
  group_id: number;

  @PrimaryColumn()
  student_id: number;

  @ManyToOne(() => StudyGroup)
  group: StudyGroup;

  @ManyToOne(() => User)
  student: User;

  @CreateDateColumn()
  joined_at: Date;
}
