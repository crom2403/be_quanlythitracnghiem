import { Question } from './question.entity';
import { Subject } from 'src/modules/subject/entities';
export declare class Chapter {
    id: number;
    subject: Subject;
    name: string;
    questions: Question[];
    created_at: Date;
    updated_at: Date;
}
