import { ExamAttempt } from '../entities';
import { Repository } from 'typeorm';
import { CreateExamAttemptDto } from '../dtos';
import { User } from 'src/modules/users';
import { ExamService } from './exam.service';
export declare class ExamAttemptService {
    private examAttemptRepository;
    private userRepository;
    private readonly examService;
    constructor(examAttemptRepository: Repository<ExamAttempt>, userRepository: Repository<User>, examService: ExamService);
    getAllExamAttemptOfStudent(): Promise<ExamAttempt[]>;
    create(studentId: string, createExamAttemptDto: CreateExamAttemptDto): Promise<string>;
    private calculateExamScore;
}
