import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamController, ExamAttemptController } from './controllers';
import { ExamService, ExamAttemptService } from './services';
import {
  AttemptAnswer,
  ExamAttempt,
  ExamChapter,
  ExamConfig,
  ExamQuestion,
  Exam,
  ExamStudyGroup,
} from './entities';
import { StudyGroupModule } from 'src/modules/study-group';
import { UsersModule } from 'src/modules/users';
import { SubjectModule } from 'src/modules/subject';
import { ContentModule } from 'src/modules/content';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AttemptAnswer,
      ExamAttempt,
      ExamChapter,
      ExamConfig,
      ExamQuestion,
      Exam,
      ExamStudyGroup,
    ]),
    StudyGroupModule,
    SubjectModule,
    UsersModule,
    ContentModule,
  ],
  controllers: [ExamController, ExamAttemptController],
  providers: [ExamService, ExamAttemptService],
  exports: [TypeOrmModule, ExamService, ExamAttemptService],
})
export class ExamModule {}
