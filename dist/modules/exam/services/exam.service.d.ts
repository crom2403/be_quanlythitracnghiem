import { CreateExamManualDto, AddQuestionToExamDto } from '../dtos';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/entities';
import { Question } from 'src/modules/content/entities';
import { Exam, ExamConfig, ExamQuestion, ExamStudyGroup } from '../entities';
import { StudyGroup } from 'src/modules/study-group/entities';
import { StudyGroupService } from 'src/modules/study-group/services';
export declare class ExamService {
    private examRepository;
    private userRepository;
    private examConfigRepository;
    private studyGroupRepository;
    private examStudyGroupRepository;
    private questionRepository;
    private examQuestionRepository;
    private readonly studyGroupService;
    constructor(examRepository: Repository<Exam>, userRepository: Repository<User>, examConfigRepository: Repository<ExamConfig>, studyGroupRepository: Repository<StudyGroup>, examStudyGroupRepository: Repository<ExamStudyGroup>, questionRepository: Repository<Question>, examQuestionRepository: Repository<ExamQuestion>, studyGroupService: StudyGroupService);
    createExamManual(userId: number, createExamManualDto: CreateExamManualDto): Promise<Exam>;
    addQuestionToExam(examId: number, addQuestionToExamDto: AddQuestionToExamDto): Promise<string>;
    private checkTypeOfExam;
    formatDateTime(isoDate: string): string;
    getAllExamOfStudent(studentId: number): Promise<{
        id: number;
        exam_id: number;
        name_exam: string;
        status: string;
        start_time: string;
        end_time: string;
        group_student_name: string;
    }[]>;
    getExamById(examId: number): Promise<Exam>;
}
