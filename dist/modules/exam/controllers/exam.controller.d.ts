import { CreateExamManualDto, AddQuestionToExamDto } from '../dtos';
import { ExamService } from '../services';
export declare class ExamController {
    private readonly examService;
    constructor(examService: ExamService);
    getAllExamOfStudent(req: any): Promise<{
        id: number;
        exam_id: number;
        name_exam: string;
        status: string;
        start_time: string;
        end_time: string;
        group_student_name: string;
    }[]>;
    getExamById(examId: string): Promise<import("..").Exam>;
    createExamManual(req: any, createExamManualDto: CreateExamManualDto): Promise<import("..").Exam>;
    addQuestionToExam(examId: string, addQuestionToExamDto: AddQuestionToExamDto): Promise<string>;
}
