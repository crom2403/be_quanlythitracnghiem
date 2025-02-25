import { Subject } from 'src/modules/subject/entities/subject.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Subject, { onDelete: 'NO ACTION' })
  subject: Subject;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
