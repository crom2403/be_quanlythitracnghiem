import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamAttempt } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class ExamAttemptService {
  constructor(
    @InjectRepository(ExamAttempt)
    private examRepository: Repository<ExamAttempt>,
  ) {}

  async getAllExamAttemptOfStudent() {
    return this.examRepository.find();
  }
}
