export declare class CreateQuestionDto {
    chapterId: number;
    content: string;
    answers: {
        content: string;
        is_correct: boolean;
    }[];
    difficulty_level: string;
}
