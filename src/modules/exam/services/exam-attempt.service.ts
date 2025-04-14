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
      point,
    } = createExamAttemptDto;

    // Check user
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

    // Check exam
    const exam = await this.getExamById(exam_id);
    if (!exam) {
      throw new HttpErrorByCode[400]('Bài thi không tồn tại');
    }

    // // Calculate score
    // const score = await this.calculateExamScore(
    //   list_question,
    //   exam.exam_questions,
    // );

    // Create exam attempt
    const newExamAttempt = this.examAttemptRepository.create({
      end_time: new Date(end_time),
      start_time: new Date(start_time),
      tab_switch_count,
      score: point,
      test_time: +test_time,
      exam,
      user,
    });

    const result = await this.examAttemptRepository.save(newExamAttempt);
    if (!result) {
      throw new HttpErrorByCode[500]('Không thể lưu bài thi');
    }

    // Save answers
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
        is_selected: is_selected,
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
      // Find the corresponding exam question
      const examQuestion = examQuestions.find(
        (q) => q.id === studentAnswer.question_id,
      );

      if (!examQuestion) {
        continue; // Skip if question not found
      }

      // Ensure answers exist and is an array
      const answers = Array.isArray(examQuestion.answers)
        ? examQuestion.answers
        : [];

      // Get correct answer IDs
      const correctAnswers = answers
        .filter((ans: any) => ans?.is_correct === true)
        .map((ans: any) => ans.id);

      // Check if student's answer is correct
      const isCorrect =
        correctAnswers.length === 1 &&
        correctAnswers.includes(studentAnswer.answer_id) &&
        studentAnswer.is_selected;

      if (isCorrect) {
        correctAnswersCount++;
      }
    }

    // Calculate score (scale to 10, rounded to 2 decimal places)
    const score =
      totalQuestions > 0 ? (correctAnswersCount / totalQuestions) * 10 : 0;

    return Math.round(score * 100) / 100;
  }

  async checkStudentCanTakeExam(studentId: number, examId: number) {
    const exam = await this.examRepository.findOne({
      where: { id: examId },
      relations: ['exam_questions'],
    });
    if (!exam) {
      throw new HttpErrorByCode[400]('Bài thi không tồn tại');
    }
    const examAttempt = await this.examAttemptRepository.findOne({
      where: {
        exam: { id: examId },
        user: { id: studentId },
      },
    });
    if (examAttempt) {
      return {
        success: false,
        message: 'Sinh viên đã làm bài thi này rồi!',
      };
    }
    return {
      success: true,
      message: 'Sinh viên có thể làm bài thi này',
    };
  }

  async getAllExamAttemptOfExam(examId: number, userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['role'],
    });
    if (!user) {
      throw new HttpErrorByCode[400]('Người dùng không tồn tại');
    }

    if (
      user.role.name !== RoleType.TEACHER &&
      user.role.name !== RoleType.ADMIN
    ) {
      throw new HttpErrorByCode[400](
        'Bạn không có quyền thực hiện hành động này',
      );
    }

    const exam = await this.examRepository.findOne({
      where: { id: examId },
      relations: ['exam_attempts'],
    });
    console.log(exam);
    if (!exam) {
      throw new HttpErrorByCode[400]('Bài thi không tồn tại');
    }

    const examAttempt = await this.examAttemptRepository.find({
      where: {
        exam: { id: examId },
      },
      relations: ['user'],
      select: {
        user: {
          id: true,
          fullname: true,
          email: true,
          student_code: true,
        },
      },
    });
    console.log(examAttempt);
    return examAttempt;
  }

  async getDetailExamAttempt(examAttemptId: number) {
    const examAttempt = await this.examAttemptRepository.findOne({
      where: { id: examAttemptId },
      relations: [
        'exam',
        'user',
        'exam.exam_questions',
        'exam.exam_questions.question',
        'exam.exam_questions.question.answers',
      ],
    });

    const listAttemptAnswer = await this.attemptAnswerRepository.find({
      where: { attempt: { id: examAttemptId } },
      relations: ['question', 'answer'],
    });

    const listAnswerStudentSelected = listAttemptAnswer.map((_) => {
      return {
        question_id: _.question.id,
        answer_id: _.answer.id,
        is_selected: _.is_selected,
      };
    });
    console.log(listAttemptAnswer);

    const listQuestion = examAttempt?.exam.exam_questions.map((_) => {
      return {
        question_id: _.question.id,
        question_content: _.question.content,
        order_index: _.order_index,
        list_anwers: _.question.answers,
      };
    });

    if (!examAttempt) {
      throw new HttpErrorByCode[400]('Bài thi không tồn tại');
    }

    return {
      listQuestion: listQuestion,
      listAnswerStudentSelected: listAnswerStudentSelected,
    };
  }
}
