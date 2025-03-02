import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Role } from 'src/modules/users/entities/role.entity';
import { TeacherSubject } from 'src/modules/subject/entities/teacher-subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, User, Role, TeacherSubject])],
  controllers: [SubjectController],
  providers: [SubjectService],
  exports: [SubjectService],
})
export class SubjectModule {}
