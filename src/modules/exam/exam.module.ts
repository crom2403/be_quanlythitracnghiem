import { Module } from '@nestjs/common';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from 'src/modules/exam/entities/exam.entity';
import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { ExamQuestion } from 'src/modules/exam/entities/exam-question.entity';
import { ExamConfig } from 'src/modules/exam/entities/exam-config.entity';
import { ExamChapter } from 'src/modules/exam/entities/exam-chapter.entity';
import { ExamStudyGroup } from 'src/modules/exam/entities/exams-study-groups.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Question } from 'src/modules/content/entities/question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Exam,
      StudyGroup,
      ExamStudyGroup,
      ExamQuestion,
      ExamConfig,
      ExamChapter,
      Question,
    ]),
  ],
  controllers: [ExamController],
  providers: [ExamService],
  exports: [ExamService],
})
export class ExamModule {}
