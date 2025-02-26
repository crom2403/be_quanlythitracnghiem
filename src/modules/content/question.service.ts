import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PaginationResult } from 'src/common/interfaces/pagination.interface';
import { CreateQuestionDto } from 'src/modules/content/dto/create-question.dto';
import { Answer } from 'src/modules/content/entities/answer.entity';
import { Chapter } from 'src/modules/content/entities/chapter.entity';
import { Question } from 'src/modules/content/entities/question.entity';
import { User } from 'src/modules/users/entities/user.entity';
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
  ): Promise<PaginationResult<Question>> {
    const { page, limit } = paginationDto;
    const [items, total] = await this.questionRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'DESC',
      },
    });

    return {
      items,
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
    console.log('listAnswer', listAnswer);
    if (!Array.isArray(listAnswer) || listAnswer.length === 0) {
      // Sửa listAnswer.length <= 0 thành listAnswer.length === 0
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
          return await this.answerRepository.save({
            ...el,
            questionId: question.id, // Thêm reference đến question
          });
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
}
