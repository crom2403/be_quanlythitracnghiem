/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { CreateExamManualDto, AddQuestionToExamDto } from '../dtos';
import { ExamService } from '../services';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get('/get-all')
  async getAllExam(@Request() req: any) {
    const userId = req.user?.sub.userId;
    return this.examService.getAllExam(userId);
  }

  @Get('/get-all-by-teacher')
  async getAllExamByTeacher(@Request() req: any) {
    const userId = req.user?.sub.userId;
    return this.examService.getAllExamByTeacher(userId);
  }

  @Get('/get-all-exams-of-student')
  async getAllExamOfStudent(@Request() req: any) {
    const userId = req.user?.sub.userId;
    return this.examService.getAllExamOfStudent(userId);
  }

  @Get(':id')
  async getExamById(@Param('id') examId: string) {
    return this.examService.getExamById(+examId);
  }

  @Post('/create-manual')
  async createExamManual(
    @Request() req: any,
    @Body() createExamManualDto: CreateExamManualDto,
  ) {
    const userId = req.user?.sub.userId;
    return this.examService.createExamManual(userId, createExamManualDto);
  }

  @Post('/add-question-to-exam/:examId')
  async addQuestionToExam(
    @Param('examId') examId: string,
    @Body() addQuestionToExamDto: AddQuestionToExamDto,
  ) {
    return this.examService.addQuestionToExam(+examId, addQuestionToExamDto);
  }
}
