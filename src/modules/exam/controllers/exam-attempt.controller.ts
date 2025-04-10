import { Body, Controller, Post, Request } from '@nestjs/common';
import { CreateExamAttemptDto } from '../dtos';
import { ExamAttemptService } from '../services';

@Controller('exam-attempt')
export class ExamAttemptController {
  constructor(private readonly examAttemptService: ExamAttemptService) {}
  @Post()
  async createExamAttempt(
    @Request() req: any,
    @Body() createExamAttemptDto: CreateExamAttemptDto,
  ) {
    const userId = req.user?.sub.userId;
    console.log('exam_id', createExamAttemptDto);
    return this.examAttemptService.create(userId, createExamAttemptDto);
  }
}
