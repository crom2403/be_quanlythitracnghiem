import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';
import { PaginationDto } from 'src/common/dtos';
import { CreateQuestionDto } from '../dtos';
// import { CreateQuestionDto } from '../dtos';
import { QuestionService } from '../services';

@Controller('/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getAllQuestions(@Query() paginationDto: PaginationDto) {
    return await this.questionService.getAllQuestions(paginationDto);
  }

  @Post()
  async createQuestion(
    @Request() req: any,
    @Body() question: CreateQuestionDto,
  ) {
    const userId = req.user?.sub?.userId;
    return await this.questionService.createQuestion(+userId, question);
  }
}
