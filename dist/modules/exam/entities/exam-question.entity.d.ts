import { Question } from 'src/modules/content/entities';
import { Exam } from '../entities';
export declare class ExamQuestion {
    id: number;
    order_index: number;
    points: number;
    exam: Exam;
    question: Question;
}
