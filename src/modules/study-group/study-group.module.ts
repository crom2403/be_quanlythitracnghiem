import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyGroupController } from './controllers';
import { StudyGroupService } from './services';
import { StudyGroup, Semester, AcademicYear, GroupStudent } from './entities';
import { SubjectModule } from 'src/modules/subject';
import { UsersModule } from 'src/modules/users';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StudyGroup,
      Semester,
      AcademicYear,
      GroupStudent,
    ]),
    SubjectModule,
    UsersModule,
  ],
  controllers: [StudyGroupController],
  providers: [StudyGroupService],
  exports: [TypeOrmModule, StudyGroupService],
})
export class StudyGroupModule {}
