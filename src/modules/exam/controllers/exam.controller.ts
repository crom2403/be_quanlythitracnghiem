/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
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

  @Get('/get-all-exams-of-study-group/:studyGroupId')
  async getAllExamOfStudyGroup(
    @Param('studyGroupId') studyGroupId: string,
    // @Query('group_student_id') group_student_id: string,
    @Request() req: any,
  ) {
    const userId = req.user?.sub.userId;
    return this.examService.getAllExamOfStudyGroup(+studyGroupId, userId);
  }

  @Get(':id')
  async getExamById(@Param('id') examId: string) {
    return this.examService.getExamById(+examId);
  }

  @Get('get-list-student-do-exam/:examId')
  async getListStudentDoExam(
    @Param('examId') examId: string,
    @Query('study_group_id') study_group_id: string,
  ) {
    return this.examService.getListStudentDoExam(+examId, +study_group_id);
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
