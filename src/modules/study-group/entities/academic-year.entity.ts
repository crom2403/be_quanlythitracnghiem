import { IsDate } from 'class-validator';
import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AcademicYear {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_year: string;

  @Column()
  @IsDate()
  end_year: string;

  @OneToMany(() => StudyGroup, (study_group) => study_group.academic_year)
  study_groups: StudyGroup[];
}
