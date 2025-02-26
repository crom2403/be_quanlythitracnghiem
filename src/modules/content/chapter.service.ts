import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PaginationResult } from 'src/common/interfaces/pagination.interface';
import { CreateChapterDto } from 'src/modules/content/dto/create-chapter.dto';
import { UpdateChapterDto } from 'src/modules/content/dto/update-chapter.dto';
import { Chapter } from 'src/modules/content/entities/chapter.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async getAllChapters(
    subjectId: number | null,
    paginationDto: PaginationDto,
  ): Promise<PaginationResult<Chapter> | Chapter[]> {
    if (subjectId !== null) {
      // Kiểm tra subject có tồn tại không
      const subject = await this.subjectRepository.findOneBy({ id: subjectId });
      if (!subject) {
        throw new NotFoundException(
          `Subject với ID ${subjectId} không tồn tại`,
        );
      }
      return this.chapterRepository.find({
        where: { subject: { id: subjectId } },
        select: ['id', 'name'], // Giữ nhất quán với phần phân trang
        order: {
          id: 'DESC', // Giữ nhất quán với phần phân trang
        },
      });
    }

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;
    const [items, total] = await this.chapterRepository.findAndCount({
      skip,
      take: limit,
      // relations: ['subject'], // Giữ comment nếu không cần
      select: ['id', 'name'],
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

  async getChapterById(id: number): Promise<Chapter> {
    return this.chapterRepository.findOne({ where: { id } });
  }

  async createChapter(createChapterDto: CreateChapterDto): Promise<Chapter> {
    const { subjectId, name } = createChapterDto;

    // Kiểm tra subject có tồn tại không
    const subject = await this.subjectRepository.findOneBy({ id: subjectId });
    if (!subject) {
      throw new NotFoundException(`Subject với ID ${subjectId} không tồn tại`);
    }

    const chapter = new Chapter();
    chapter.name = name;
    chapter.subject = subject;

    return this.chapterRepository.save(chapter);
  }

  async updateChapter(
    id: number,
    updateChapterDto: UpdateChapterDto,
  ): Promise<Chapter> {
    // Kiểm tra chapter tồn tại
    const chapter = await this.chapterRepository.findOneBy({ id });
    if (!chapter) {
      throw new NotFoundException(`Chapter với ID ${id} không tồn tại`);
    }

    // Cập nhật chỉ trường name
    await this.chapterRepository.update(id, { name: updateChapterDto.name });

    // Trả về chapter đã cập nhật
    return this.chapterRepository.findOneBy({ id });
  }

  async deleteChapter(id: number): Promise<string> {
    const result = await this.chapterRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Chapter with ID ${id} not found`);
    } else {
      return `Chapter with Id ${id} deleted successfully`;
    }
  }
}
