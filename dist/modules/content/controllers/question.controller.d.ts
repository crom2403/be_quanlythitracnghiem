import { PaginationDto } from 'src/common/dtos';
import { CreateQuestionDto } from '../dtos';
import { QuestionService } from '../services';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getAllQuestions(paginationDto: PaginationDto): Promise<import("../../../common").PaginationResult<import("..").Question>>;
    createQuestion(req: any, question: CreateQuestionDto): Promise<{
        content: string;
        difficulty: string;
        chapter: import("..").Chapter;
        created_by: import("../..").User;
    } & import("..").Question>;
}
