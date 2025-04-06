export declare class CreateExamAttemptDto {
    exam_id: number;
    list_question: QuestionItemDto[];
    start_time: string;
    end_time: string;
    test_time: number;
    tab_switch_count: number;
}
export declare class QuestionItemDto {
    question_id: number;
    list_answer: AnswerItemDto[];
}
export declare class AnswerItemDto {
    anwer_id: number;
    is_selected: boolean;
}
