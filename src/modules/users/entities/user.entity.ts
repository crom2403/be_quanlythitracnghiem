import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  student_code: string;

  @Column()
  phone_number: string;

  @Column()
  birthday: Date;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  google_id: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'teacher', 'student'],
    default: 'student',
  })
  user_type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
