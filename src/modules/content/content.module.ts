import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer, Chapter, Question } from './entities';
import { ChapterController, QuestionController } from './controllers';
import { QuestionService, ChapterService } from './services';
import { SubjectModule } from 'src/modules/subject';
import { UsersModule } from 'src/modules/users';

@Module({
  imports: [
    TypeOrmModule.forFeature([Answer, Chapter, Question]),
    SubjectModule,
    UsersModule,
  ],

  controllers: [ChapterController, QuestionController],
  providers: [ChapterService, QuestionService],
  exports: [TypeOrmModule, ChapterService, QuestionService],
})
export class ContentModule {}
