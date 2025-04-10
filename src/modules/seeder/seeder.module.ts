import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/modules/users';
import { SubjectModule } from 'src/modules/subject';
import { ContentModule } from 'src/modules/content';
import { SeederService } from 'src/modules/seeder/services';
import { StudyGroupModule } from 'src/modules/study-group';
import { ExamModule } from 'src/modules/exam';
import {
  Exam,
  ExamConfig,
  ExamQuestion,
  ExamStudyGroup,
} from 'src/modules/exam/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exam, ExamConfig, ExamQuestion, ExamStudyGroup]),
    UsersModule,
    SubjectModule,
    ContentModule,
    StudyGroupModule,
    ExamModule,
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
