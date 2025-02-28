import { IsDate } from 'class-validator';
import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AcademicYear {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDate()
  start_date: Date;

  @Column()
  @IsDate()
  end_date: Date;

  @OneToMany(() => StudyGroup, (study_group) => study_group.academic_year)
  study_groups: StudyGroup[];
}
