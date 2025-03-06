import { AddQuestionToExamDto } from './dto/add-question-to-exam.dto';
import {
  CreateExamManualDto,
  ExamConfigsType,
} from 'src/modules/exam/dto/create-exam-manual.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from 'src/modules/exam/entities/exam.entity';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { ExamConfig } from 'src/modules/exam/entities/exam-config.entity';
import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { ExamStudyGroup } from 'src/modules/exam/entities/exams-study-groups.entity';
import { Question } from 'src/modules/content/entities/question.entity';
import { ExamQuestion } from 'src/modules/exam/entities/exam-question.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(ExamConfig)
    private examConfigRepository: Repository<ExamConfig>,
    @InjectRepository(StudyGroup)
    private studyGroupRepository: Repository<StudyGroup>,
    @InjectRepository(ExamStudyGroup)
    private examStudyGroupRepository: Repository<ExamStudyGroup>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(ExamQuestion)
    private examQuestionRepository: Repository<ExamQuestion>,
  ) {}

  async createExamManual(
    userId: number,
    createExamManualDto: CreateExamManualDto,
  ) {
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

    // Xử lý exam configs
    await Promise.all(
      listExamConfigs.map(async (questionConfig: ExamConfigsType) => {
        const newExamConfig = this.examConfigRepository.create({
          ...questionConfig,
          exam,
        });
        await this.examConfigRepository.save(newExamConfig);
      }),
    );

    // Xử lý study groups
    await Promise.all(
      listIdStudyGroups.map(async (idStudyGroup: number) => {
        const study_group = await this.studyGroupRepository.findOne({
          where: { id: idStudyGroup },
        });
        if (!study_group) {
          throw new Error(
            `Study group with ID ${idStudyGroup} not found, cannot create exam`,
          );
        }
        const newQuestionConfig = this.examStudyGroupRepository.create({
          study_group,
          exam,
        });
        await this.examStudyGroupRepository.save(newQuestionConfig);
      }),
    );

    return exam;
  }

  // Hãy tạo hàm addQuestionToExam
  async addQuestionToExam(
    examId: number,
    addQuestionToExamDto: AddQuestionToExamDto,
  ) {
    const { list_question } = addQuestionToExamDto;
    const exam = await this.examRepository.findOne({
      where: { id: examId },
      relations: ['exam_questions'],
    });
    if (!exam) {
      throw new Error(`Exam with ID ${examId} not found`);
    }
    // Xóa các exam_questions cũ
    await this.examQuestionRepository.remove(exam.exam_questions);

    if (list_question.length === 0) {
      throw new Error('List question is empty');
    }
    // Tạo các exam_questions mới
    await Promise.all(
      list_question?.map(async (question) => {
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
      }),
    );
    return 'Add question to exam successfully';
  }
}
