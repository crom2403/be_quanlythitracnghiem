import { AddQuestionToExamDto } from './dto/add-question-to-exam.dto';
import { Body, Controller, Param, Post, Request } from '@nestjs/common';
import { CreateExamManualDto } from 'src/modules/exam/dto/create-exam-manual.dto';
import { ExamService } from 'src/modules/exam/exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

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
