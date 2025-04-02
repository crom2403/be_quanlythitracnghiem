
export class CreateExamAttemptDto {
    exam_id: number
    list_question: QuestionItemDto[]
    start_time: string
    end_time: string
    test_time: number
    tab_switch_count: number
    status: string
}

export class QuestionItemDto {
    question_id: number;
    list_answer: AnswerItemDto[];
}

export class AnswerItemDto {
    anwer_id: number;
    is_selected: boolean;
}