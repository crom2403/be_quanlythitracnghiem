import { Exclude } from 'class-transformer';
import { Role } from 'src/modules/users/entities/role.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
