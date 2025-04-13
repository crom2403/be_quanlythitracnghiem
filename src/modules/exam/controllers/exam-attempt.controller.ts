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

  @Get('get-all-exam-attempt-of-exam/:examId')
  async getExamDetail(@Param('examId') examId: string, @Request() req: any) {
    const userId = req.user?.sub.userId;
    return this.examAttemptService.getAllExamAttemptOfExam(+examId, userId);
  }

  // @Post('get-detail-exam-attempt-of-student')
  // async getDetailExamAttemptOfStudent(
  //   @Request() req: any,
  //   @Body() body: { examId: number; studentId: number },
  // ) {
  //   const userId = req.user?.sub.userId;
  //   // return this.examAttemptService.getDetailExamAttemptOfStudent(
  //   //   userId,
  //   //   body.examId,
  //   // );
  // }

  @Get('get-detail-of-exam-attempt/:examAttemptId')
  async getDetailExamAttempt(@Param('examAttemptId') examAttemptId: string) {
    return this.examAttemptService.getDetailExamAttempt(+examAttemptId);
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
