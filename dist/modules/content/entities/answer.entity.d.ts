import { Question } from './question.entity';
export declare class Answer {
    id: number;
    content: string;
    is_correct: boolean;
    order_index: number;
    question: Question;
}
