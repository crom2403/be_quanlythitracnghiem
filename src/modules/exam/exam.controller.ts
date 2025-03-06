import { Body, Controller, Post, Request } from '@nestjs/common';
import { CreateExamManualDto } from 'src/modules/exam/dto/create-exam-manual.dto';
import { ExamService } from 'src/modules/exam/exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post('/create-manual')
  async createExamManual(
    @Request() req,
    @Body() createExamManualDto: CreateExamManualDto,
  ) {
    const userId = req.user?.sub.userId;
    return this.examService.createExamManual(userId, createExamManualDto);
  }
}
