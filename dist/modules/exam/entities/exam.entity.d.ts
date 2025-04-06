import { ExamConfig, ExamQuestion, ExamAttempt } from '../entities';
import { StudyGroup } from 'src/modules/study-group/entities';
import { User } from 'src/modules/users/entities';
export declare class Exam {
    id: number;
    name: string;
    start_time: string;
    end_time: string;
    duration_minutes: number;
    is_shuffled_question: boolean;
    is_shuffled_answer: boolean;
    allow_review: boolean;
    allow_review_point: boolean;
    exam_type: string;
    created_by: User;
    exam_study_groups: StudyGroup[];
    exam_configs: ExamConfig[];
    exam_questions: ExamQuestion[];
    exam_attempts: ExamAttempt[];
    created_at: Date;
    updated_at: Date;
}
