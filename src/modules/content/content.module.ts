import { Module } from '@nestjs/common';
import { Answer } from 'src/modules/content/entities/answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from 'src/modules/content/entities/chapter.entity';
import { Question } from 'src/modules/content/entities/question.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { ChapterController } from 'src/modules/content/chapter.controller';
import { QuestionController } from 'src/modules/content/question.controller';
import { ChapterService } from 'src/modules/content/chapter.service';
import { QuestionService } from 'src/modules/content/question.service';
import { UsersService } from 'src/modules/users/users.service';
import { Role } from 'src/modules/users/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Answer, Chapter, Question, Subject, User, Role]),
  ],
  controllers: [ChapterController, QuestionController],
  providers: [ChapterService, QuestionService, UsersService],
  exports: [ChapterService, QuestionService],
})
export class ContentModule {}
