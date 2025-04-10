import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttemptAnswer, Exam, ExamAttempt } from '../entities';
import { Repository } from 'typeorm';
import { CreateExamAttemptDto, QuestionItemDto } from '../dtos';
import { User } from 'src/modules/users';
import { RoleType } from 'src/modules/auth';
import { Answer, Question } from 'src/modules/content';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class ExamAttemptService {
  constructor(
    @InjectRepository(ExamAttempt)
    private examAttemptRepository: Repository<ExamAttempt>,
    @InjectRepository(AttemptAnswer)
    private attemptAnswerRepository: Repository<AttemptAnswer>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
  ) {}

  async getAllExamAttemptOfStudent() {
    return this.examAttemptRepository.find();
  }

  private async getExamById(examId: number) {
    return this.examRepository.findOne({
      where: { id: examId },
      relations: [
        'exam_questions',
        'exam_questions.question',
        'exam_questions.question.answers',
      ],
    });
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

    // Kiểm tra user
    const user = await this.userRepository.findOne({
      where: { id: +studentId },
      relations: ['role'],
      select: { id: true, role: { name: true } },
    });

    if (!user) {
      throw new Error('Người dùng không tồn tại');
    }

    if (user.role.name !== RoleType.STUDENT) {
      throw new HttpErrorByCode[400](
        'Bạn không có quyền thực hiện hành động này',
      );
    }

    // Kiểm tra bài thi
    const exam = await this.getExamById(exam_id);
    if (!exam) {
      throw new HttpErrorByCode[400]('Bài thi không tồn tại');
    }

    // Kiểm tra xem đã thi chưa
    // const examAttempt = await this.examAttemptRepository.findOne({
    //   where: {
    //     exam: { id: exam_id },
    //     user: { id: user.id },
    //   },
    // });

    // if (examAttempt) {
    //   throw new HttpErrorByCode[400]('Sinh viên đã làm bài thi này rồi!');
    // }

    // Tính điểm
    const score = await this.calculateExamScore(
      list_question,
      exam.exam_questions,
    );

    // Tạo exam attempt
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

    // Lưu các câu trả lời
    for (const question of list_question) {
      const { question_id, answer_id, is_selected } = question;

      const questionEntity = await this.questionRepository.findOne({
        where: { id: question_id },
      });

      if (!questionEntity) {
        throw new HttpErrorByCode[400](`Câu hỏi ${question_id} không tồn tại`);
      }

      const answer = await this.answerRepository.findOne({
        where: { id: answer_id },
      });

      if (!answer) {
        throw new HttpErrorByCode[400](`Đáp án ${answer_id} không tồn tại`);
      }

      const attemptAnswer = this.attemptAnswerRepository.create({
        question: questionEntity,
        answer,
        is_selected,
        attempt: result,
      });

      await this.attemptAnswerRepository.save(attemptAnswer);
    }

    return {
      success: true,
      message: 'Nộp bài thi thành công!',
    };
  }

  private async calculateExamScore(
    studentAnswers: QuestionItemDto[],
    examQuestions: any[],
  ): Promise<number> {
    let correctAnswersCount = 0;
    const totalQuestions = examQuestions.length;

    for (const studentAnswer of studentAnswers) {
      const examQuestion = examQuestions.find(
        (q) => q.id === studentAnswer.question_id,
      );

      if (!examQuestion) continue;

      const correctAnswers = examQuestion.answers
        .filter((ans) => ans.is_correct)
        .map((ans) => ans.id);

      // Kiểm tra đáp án của học sinh
      const isCorrect =
        correctAnswers.length === 1 &&
        correctAnswers[0] === studentAnswer.answer_id &&
        studentAnswer.is_selected;

      if (isCorrect) {
        correctAnswersCount++;
      }
    }

    const score =
      totalQuestions > 0 ? (correctAnswersCount / totalQuestions) * 10 : 0;

    return Math.round(score * 100) / 100;
  }
}
