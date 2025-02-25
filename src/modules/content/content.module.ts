import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { Answer } from 'src/modules/content/entities/answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from 'src/modules/content/entities/chapter.entity';
import { Question } from 'src/modules/content/entities/question.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Answer, Chapter, Question, Subject])],
  controllers: [ContentController],
  providers: [ContentService],
  exports: [ContentService],
})
export class ContentModule {}
