import { Exam } from '../entities';
import { User } from 'src/modules/users/entities';
export declare class ExamAttempt {
    id: number;
    start_time: Date;
    end_time: Date;
    test_time: number;
    score: number;
    tab_switch_count: number;
    exam: Exam;
    user: User;
    created_at: Date;
    updated_at: Date;
}
