import { Answer } from './answer.entity';
import { Chapter } from './chapter.entity';
import { User } from 'src/modules/users/entities';
export declare class Question {
    id: number;
    content: string;
    difficulty_level: string;
    chapter: Chapter;
    created_by: User;
    answers: Answer[];
    created_at: Date;
    updated_at: Date;
}
