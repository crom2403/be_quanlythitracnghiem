import { Module } from '@nestjs/common';
import { StudyGroupController } from './study-group.controller';
import { StudyGroupService } from './study-group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { Semester } from 'src/modules/study-group/entities/semester.entity';
import { AcademicYear } from 'src/modules/study-group/entities/academic-year.entity';
import { GroupStudent } from 'src/modules/study-group/entities/group-student.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StudyGroup,
      Semester,
      AcademicYear,
      GroupStudent,
      User,
      Subject,
    ]),
  ],
  controllers: [StudyGroupController],
  providers: [StudyGroupService],
  exports: [StudyGroupService],
})
export class StudyGroupModule {}
