import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamAttempt } from '../entities';
import { Repository } from 'typeorm';
import { CreateExamAttemptDto, QuestionItemDto } from '../dtos';
import { User } from 'src/modules/users';
import { RoleType } from 'src/modules/auth';
import { ExamService } from './exam.service';

@Injectable()
export class ExamAttemptService {
  constructor(
    @InjectRepository(ExamAttempt)
    private examAttemptRepository: Repository<ExamAttempt>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly examService: ExamService,
  ) {}

  async getAllExamAttemptOfStudent() {
    return this.examAttemptRepository.find();
  }

  async create(
    studentId: string,
    createExamAttemptDto: CreateExamAttemptDto,
  ): Promise<any> {
    const {
      exam_id,
      list_question,
      start_time,
      end_time,
      test_time,
      tab_switch_count,
    } = createExamAttemptDto;
    const user = await this.userRepository.findOne({
      where: {
        id: +studentId,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.role.name !== RoleType.STUDENT) {
      throw new Error('User is not student');
    }

    const exam = await this.examService.getExamById(exam_id);

    if (!exam) {
      throw new Error('Exam not found');
    }

    // Tính điểm bài kiểm tra
    const score = this.calculateExamScore(list_question, exam.exam_questions);

    // Tạo bản ghi mới cho lần thi
    const newExamAttempt = this.examAttemptRepository.create({
      end_time: new Date(end_time),
      start_time: new Date(start_time),
      tab_switch_count,
      score,
      test_time: +test_time,
      exam,
      user,
    });

    const result = await this.examAttemptRepository.save(newExamAttempt);

    if (!result) {
      throw new Error('Create exam attempt failed');
    }

    return {
      success: true,
      message: 'Nôp bài thi thành công',
    };
  }

  private calculateExamScore(
    studentAnswers: QuestionItemDto[],
    examQuestions: any[],
  ): number {
    let correctAnswersCount = 0;
    const totalQuestions = examQuestions.length;

    // Kiểm tra từng câu trả lời của học sinh
    studentAnswers.forEach((studentQuestion) => {
      // Tìm câu hỏi tương ứng trong đề thi
      const examQuestion = examQuestions.find(
        (q) => q.id === studentQuestion.question_id,
      );

      if (!examQuestion) return;

      // Kiểm tra câu trả lời
      let isCorrect = true;

      // Lấy danh sách đáp án đúng từ examQuestion
      const correctAnswers = examQuestion.answers.filter(
        (ans) => ans.is_correct,
      );

      // Kiểm tra xem học sinh đã chọn đúng tất cả đáp án đúng chưa
      const selectedAnswers = studentQuestion.list_answer.filter(
        (ans) => ans.is_selected,
      );

      // Kiểm tra xem học sinh có chọn đúng số lượng và ID của đáp án đúng không
      if (selectedAnswers.length !== correctAnswers.length) {
        isCorrect = false;
      } else {
        // Kiểm tra từng đáp án được chọn có nằm trong danh sách đáp án đúng không
        selectedAnswers.forEach((selectedAns) => {
          const isCorrectAnswer = correctAnswers.some(
            (correctAns) => correctAns.id === selectedAns.anwer_id,
          );
          if (!isCorrectAnswer) {
            isCorrect = false;
          }
        });
      }

      // Đếm số câu trả lời đúng
      if (isCorrect) {
        correctAnswersCount++;
      }
    });

    // Tính điểm theo thang điểm 10
    const score =
      totalQuestions > 0 ? (correctAnswersCount / totalQuestions) * 10 : 0;

    // Làm tròn điểm số đến 2 chữ số thập phân
    return Math.round(score * 100) / 100;
  }
}
