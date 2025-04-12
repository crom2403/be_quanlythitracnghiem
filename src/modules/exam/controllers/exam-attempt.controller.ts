import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { CreateExamAttemptDto } from '../dtos';
import { ExamAttemptService } from '../services';

@Controller('exam-attempt')
export class ExamAttemptController {
  constructor(private readonly examAttemptService: ExamAttemptService) {}

  @Get('check-student-can-take-exam/:examId')
  async checkStudentTakeExam(
    @Request() req: any,
    @Param('examId') examId: string,
  ) {
    const userId = req.user?.sub.userId;
    return this.examAttemptService.checkStudentCanTakeExam(userId, +examId);
  }

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
