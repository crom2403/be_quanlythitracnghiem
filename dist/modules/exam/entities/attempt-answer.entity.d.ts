import { Answer, Question } from 'src/modules/content/entities';
import { ExamAttempt } from '../entities';
export declare class AttemptAnswer {
    id: number;
    attempt: ExamAttempt;
    question: Question;
    answer: Answer;
    created_at: Date;
    updated_at: Date;
}
