import { Controller, Get } from '@nestjs/common';

@Controller('exam-attempt')
export class ExamAttemptController {
  @Get()
  async getAll() {
    return 'exam-attempt';
  }
}
