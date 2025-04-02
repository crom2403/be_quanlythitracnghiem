import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamAttempt } from '../entities';
import { Repository } from 'typeorm';
import { CreateExamAttemptDto } from '../dtos';
import { User } from 'src/modules/users';
import { RoleType } from 'src/modules/auth';

@Injectable()
export class ExamAttemptService {
  constructor(
    @InjectRepository(ExamAttempt)
    private examRepository: Repository<ExamAttempt>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllExamAttemptOfStudent() {
    return this.examRepository.find();
  }

  async create( studentId:string,createExamAttemptDto: CreateExamAttemptDto):Promise<void> {
    const {exam_id, list_question, start_time, end_time} = createExamAttemptDto
    const user = await this.userRepository.findOne({
      where: {
        id: +studentId,
      },
    });
    
    if(!user) {
      throw new Error('User not found');
    }

    if(user.role.name !== RoleType.STUDENT) {
      throw new Error('User is not student');
    }

    const exam = await this.examRepository.findOne({
      where: {
        id: exam_id,
      },
    });

    if(!exam) {
      throw new Error('Exam not found');
    }



    const newExamAttempt = this.examRepository.create();

  }
}
