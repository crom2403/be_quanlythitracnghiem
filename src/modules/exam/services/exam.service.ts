import {
  CreateExamManualDto,
  ExamConfigsType,
  AddQuestionToExamDto,
} from '../dtos';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/entities';
import { Question } from 'src/modules/content/entities';
import { Exam, ExamConfig, ExamQuestion, ExamStudyGroup } from '../entities';
import { StudyGroup } from 'src/modules/study-group/entities';
import { StudyGroupService } from 'src/modules/study-group/services';

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
    private readonly studyGroupService: StudyGroupService,
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
  private checkTypeOfExam(startTime: Date, endTime: Date) {
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

  public formatDateTime(isoDate: string): string {
    const date = new Date(isoDate);

    // Lấy các thành phần ngày, tháng, giờ, phút
    const day = String(date.getUTCDate()).padStart(2, '0'); // dd
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // mm (tháng bắt đầu từ 0 nên +1)
    const year = date.getUTCFullYear(); // yyyy

    let hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    // Chuyển đổi sang định dạng 12 giờ
    hours = hours % 12 || 12; // Nếu giờ là 0 hoặc 12, hiển thị là 12
    const formattedHours = String(hours).padStart(2, '0');

    // Ghép chuỗi kết quả
    return `${day}/${month}/${year}, ${formattedHours}:${minutes} ${period}`;
  }

  async getAllExamOfStudent(studentId: number) {
    const user = await this.userRepository.findOne({
      where: { id: studentId },
    });

    // Kiểm tra nếu không tìm thấy user
    if (!user) {
      throw new Error('User not found');
    }

    const listStudyGroupOfStudent =
      await this.studyGroupService.getStudyGroupByStudentId(user.id);
    const listIdsStudentGroup = listStudyGroupOfStudent.map(
      (studyGroup) => studyGroup.id,
    );

    const listExamOfStudent =
      await this.studyGroupService.getListExamOfStudyGroups(
        listIdsStudentGroup,
      );

    // Sửa logic map để xử lý mảng exam_study_group
    const result = listExamOfStudent.flatMap((studyGroup) =>
      studyGroup.exam_study_group.map((examStudyGroup) => ({
        id: studyGroup.id,
        exam_id: examStudyGroup.exam.id,
        name_exam: examStudyGroup.exam.name,
        status: this.checkTypeOfExam(
          new Date(examStudyGroup.exam.start_time),
          new Date(examStudyGroup.exam.end_time),
        ),
        start_time: this.formatDateTime(examStudyGroup.exam.start_time),
        end_time: this.formatDateTime(examStudyGroup.exam.end_time),
        group_student_name: `${studyGroup.subject.name} - NH${studyGroup.academic_year.start_year} - ${studyGroup.semester.name}`,
      })),
    );

    return result;
  }
}
