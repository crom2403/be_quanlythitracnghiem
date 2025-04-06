import { CreateExamAttemptDto } from '../dtos';
import { ExamAttemptService } from '../services';
export declare class ExamAttemptController {
    private readonly examAttemptService;
    constructor(examAttemptService: ExamAttemptService);
    createExamAttempt(req: any, createExamAttemptDto: CreateExamAttemptDto): Promise<string>;
}
