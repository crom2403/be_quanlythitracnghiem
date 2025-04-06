import { PaginationDto } from 'src/common/dtos';
import { PaginationResult } from 'src/common/interfaces';
import { CreateQuestionDto } from '../dtos';
import { Answer, Question, Chapter } from '../entities';
import { User } from 'src/modules/users/entities';
import { Repository } from 'typeorm';
export declare class QuestionService {
    private userRepository;
    private chapterRepository;
    private questionRepository;
    private answerRepository;
    constructor(userRepository: Repository<User>, chapterRepository: Repository<Chapter>, questionRepository: Repository<Question>, answerRepository: Repository<Answer>);
    getAllQuestions(paginationDto: PaginationDto): Promise<PaginationResult<Question>>;
    createQuestion(userId: number, createQuestionDto: CreateQuestionDto): Promise<{
        content: string;
        difficulty: string;
        chapter: Chapter;
        created_by: User;
    } & Question>;
}
