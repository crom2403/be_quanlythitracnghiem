import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateQuestionDto } from 'src/modules/content/dto/create-question.dto';
// import { CreateQuestionDto } from 'src/modules/content/dto/create-question.dto';
import { QuestionService } from 'src/modules/content/question.service';

@Controller('/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getAllQuestions(@Query() paginationDto: PaginationDto) {
    return await this.questionService.getAllQuestions(paginationDto);
  }

  @Post()
  async createQuestion(@Request() req, @Body() question: CreateQuestionDto) {
    const userId = req.user?.sub?.userId;

    return await this.questionService.createQuestion(+userId, question);
  }
}
