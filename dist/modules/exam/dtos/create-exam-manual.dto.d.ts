export declare class CreateExamManualDto {
    name: string;
    start_time: string;
    end_time: string;
    duration_minutes: number;
    is_shuffled_question: boolean;
    is_shuffled_answer: boolean;
    allow_review: boolean;
    allow_review_point: boolean;
    exam_type: string;
    listIdStudyGroups: number[];
    listExamConfigs: ExamConfigsType[];
}
export type ExamConfigsType = {
    difficulty_level: 'easy' | 'medium' | 'hard';
    question_count: number;
};
