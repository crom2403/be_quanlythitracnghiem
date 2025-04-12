import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos';
import { PaginationResult } from 'src/common/interfaces';
import { CreateQuestionDto } from '../dtos';
import { Answer, Question, Chapter } from '../entities';
import { User } from 'src/modules/users/entities';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}

  async getAllQuestions(
    paginationDto: PaginationDto,
  ): Promise<PaginationResult<any>> {
    const { page, limit } = paginationDto;
    const [items, total] = await this.questionRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'DESC',
      },
      relations: ['chapter', 'chapter.subject'],
      select: {
        id: true,
        content: true,
        difficulty_level: true,
        chapter: {
          id: true,
          name: true,
          subject: {
            id: true,
            name: true,
          },
        },
      },
    });
    const result = items.map((_) => {
      return {
        id: _.id,
        content: _.content,
        difficulty_level: _.difficulty_level,
        subject_name: _.chapter.subject.name,
      };
    });
    return {
      items: result,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async createQuestion(userId: number, createQuestionDto: CreateQuestionDto) {
    // Kiểm tra xem user có tồn tại hay không
    console.log(userId);
    console.log(createQuestionDto);
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found, cannot create question');
    }

    // Kiểm tra xem chapter có tồn tại hay không
    const chapter = await this.chapterRepository.findOne({
      where: {
        id: createQuestionDto.chapterId,
      },
    });

    if (!chapter) {
      throw new NotFoundException('Chapter not found, cannot create question');
    }

    const listAnswer = createQuestionDto.answers;
    if (!Array.isArray(listAnswer) || listAnswer.length === 0) {
      throw new BadRequestException('Answers are required');
    }

    try {
      // Tạo và lưu câu hỏi trước
      const question = await this.questionRepository.save({
        content: createQuestionDto.content,
        difficulty: createQuestionDto.difficulty_level,
        chapter: chapter, // Lưu toàn bộ đối tượng chapter nếu có quan hệ
        created_by: user,
      });

      // Lưu các câu trả lời với reference tới câu hỏi
      const savedAnswers = await Promise.all(
        listAnswer?.map(async (el: any) => {
          const newAnswer = new Answer();
          newAnswer.content = el.content;
          newAnswer.is_correct = el.is_correct;
          newAnswer.order_index = el.order_index;
          newAnswer.question = question;
          return await this.answerRepository.save(newAnswer);
        }),
      );

      // Cập nhật câu hỏi với danh sách câu trả lời
      question.answers = savedAnswers;
      return question;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to create question: ${error.message}`,
      );
    }
  }

  async deleteQuestion(questionId: number) {
    // Kiểm tra xem câu hỏi có tồn tại hay không
    const question = await this.questionRepository.findOne({
      where: {
        id: questionId,
      },
    });

    if (!question) {
      throw new NotFoundException('Question not found');
    }

    // Xóa câu hỏi
    await this.questionRepository.remove(question);
  }
}
