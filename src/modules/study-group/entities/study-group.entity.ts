import { Subject } from 'src/modules/subject/entities/subject.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
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

  @Column({ unique: true })
  invite_code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
