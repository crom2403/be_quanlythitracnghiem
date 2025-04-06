"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../../users/entities");
const entities_2 = require("../../content/entities");
const entities_3 = require("../entities");
const entities_4 = require("../../study-group/entities");
const services_1 = require("../../study-group/services");
let ExamService = class ExamService {
    constructor(examRepository, userRepository, examConfigRepository, studyGroupRepository, examStudyGroupRepository, questionRepository, examQuestionRepository, studyGroupService) {
        this.examRepository = examRepository;
        this.userRepository = userRepository;
        this.examConfigRepository = examConfigRepository;
        this.studyGroupRepository = studyGroupRepository;
        this.examStudyGroupRepository = examStudyGroupRepository;
        this.questionRepository = questionRepository;
        this.examQuestionRepository = examQuestionRepository;
        this.studyGroupService = studyGroupService;
    }
    async createExamManual(userId, createExamManualDto) {
        const { listIdStudyGroups, listExamConfigs } = createExamManualDto;
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error('User not found, cannot create exam');
        }
        if (listExamConfigs.length === 0) {
            throw new Error('List exam config is empty, cannot create exam');
        }
        if (listIdStudyGroups.length === 0) {
            throw new Error('List study group is empty, cannot create exam');
        }
        const exam = this.examRepository.create({
            ...createExamManualDto,
            created_by: user,
        });
        await this.examRepository.save(exam);
        await Promise.all(listExamConfigs.map(async (questionConfig) => {
            const newExamConfig = this.examConfigRepository.create({
                ...questionConfig,
                exam,
            });
            await this.examConfigRepository.save(newExamConfig);
        }));
        await Promise.all(listIdStudyGroups.map(async (idStudyGroup) => {
            const study_group = await this.studyGroupRepository.findOne({
                where: { id: idStudyGroup },
            });
            if (!study_group) {
                throw new Error(`Study group with ID ${idStudyGroup} not found, cannot create exam`);
            }
            const newQuestionConfig = this.examStudyGroupRepository.create({
                study_group,
                exam,
            });
            await this.examStudyGroupRepository.save(newQuestionConfig);
        }));
        return exam;
    }
    async addQuestionToExam(examId, addQuestionToExamDto) {
        const { list_question } = addQuestionToExamDto;
        const exam = await this.examRepository.findOne({
            where: { id: examId },
            relations: ['exam_questions'],
        });
        if (!exam) {
            throw new Error(`Exam with ID ${examId} not found`);
        }
        await this.examQuestionRepository.remove(exam.exam_questions);
        if (list_question.length === 0) {
            throw new Error('List question is empty');
        }
        await Promise.all(list_question?.map(async (question) => {
            const { question_id } = question;
            const questionDb = await this.questionRepository.findOne({
                where: { id: question_id },
            });
            if (!questionDb) {
                throw new Error(`Question with ID ${question_id} not found`);
            }
            const examQuestion = this.examQuestionRepository.create({
                ...question,
                question: questionDb,
                exam,
            });
            await this.examQuestionRepository.save(examQuestion);
        }));
        return 'Add question to exam successfully';
    }
    checkTypeOfExam(startTime, endTime) {
        const now = new Date();
        if (startTime > now) {
            return 'not_open';
        }
        if (startTime < now && endTime > now) {
            return 'opened';
        }
        if (endTime < now) {
            return 'closed';
        }
    }
    formatDateTime(isoDate) {
        const date = new Date(isoDate);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        let hours = date.getUTCHours();
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const formattedHours = String(hours).padStart(2, '0');
        return `${day}/${month}/${year}, ${formattedHours}:${minutes} ${period}`;
    }
    async getAllExamOfStudent(studentId) {
        const user = await this.userRepository.findOne({
            where: { id: studentId },
        });
        if (!user) {
            throw new Error('User not found');
        }
        const listStudyGroupOfStudent = await this.studyGroupService.getStudyGroupByStudentId(user.id);
        const listIdsStudentGroup = listStudyGroupOfStudent.map((studyGroup) => studyGroup.id);
        const listExamOfStudent = await this.studyGroupService.getListExamOfStudyGroups(listIdsStudentGroup);
        const result = listExamOfStudent.flatMap((studyGroup) => studyGroup.exam_study_group.map((examStudyGroup) => ({
            id: studyGroup.id,
            exam_id: examStudyGroup.exam.id,
            name_exam: examStudyGroup.exam.name,
            status: this.checkTypeOfExam(new Date(examStudyGroup.exam.start_time), new Date(examStudyGroup.exam.end_time)),
            start_time: this.formatDateTime(examStudyGroup.exam.start_time),
            end_time: this.formatDateTime(examStudyGroup.exam.end_time),
            group_student_name: `${studyGroup.subject.name} - NH${studyGroup.academic_year.start_year} - ${studyGroup.semester.name}`,
        })));
        return result;
    }
    async getExamById(examId) {
        const exam = await this.examRepository.findOne({
            where: { id: examId },
            relations: [
                'exam_questions',
                'exam_questions.question',
                'exam_questions.question.answers',
            ],
            select: {
                id: true,
                name: true,
                start_time: true,
                end_time: true,
                duration_minutes: true,
                is_shuffled_answer: true,
                is_shuffled_question: true,
                allow_review: true,
                allow_review_point: true,
                exam_questions: {
                    id: true,
                    order_index: true,
                    question: {
                        id: true,
                        content: true,
                        answers: {
                            id: true,
                            content: true,
                            is_correct: true,
                            order_index: true,
                        },
                    },
                },
            },
        });
        if (!exam) {
            throw new Error(`Exam with ID ${examId} not found`);
        }
        return exam;
    }
};
exports.ExamService = ExamService;
exports.ExamService = ExamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_3.Exam)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_3.ExamConfig)),
    __param(3, (0, typeorm_1.InjectRepository)(entities_4.StudyGroup)),
    __param(4, (0, typeorm_1.InjectRepository)(entities_3.ExamStudyGroup)),
    __param(5, (0, typeorm_1.InjectRepository)(entities_2.Question)),
    __param(6, (0, typeorm_1.InjectRepository)(entities_3.ExamQuestion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        services_1.StudyGroupService])
], ExamService);
//# sourceMappingURL=exam.service.js.map