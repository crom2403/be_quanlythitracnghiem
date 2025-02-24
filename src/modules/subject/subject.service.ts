import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PaginationResult } from 'src/common/interfaces/pagination.interface';
import { CreateSubjectDto } from 'src/modules/subject/dto/create-subject.dto';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async getAll(
    paginationDto: PaginationDto,
  ): Promise<PaginationResult<Subject>> {
    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await this.subjectRepository.findAndCount({
      skip,
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

  async getById(id: number): Promise<Subject> {
    return await this.subjectRepository.findOneBy({ id });
  }

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const existingSubject = await this.subjectRepository.findOneBy({
      public_id: createSubjectDto.public_id,
    });

    if (existingSubject) {
      throw new NotFoundException('Subject already exists');
    }
    const newSubject = this.subjectRepository.create(createSubjectDto);
    return await this.subjectRepository.save(newSubject);
  }

  async update(
    id: number,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    await this.subjectRepository.update(id, updateSubjectDto);
    return await this.subjectRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<string> {
    const result = await this.subjectRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    } else {
      return `Subject with Id ${id} deleted successfully`;
    }
  }
}
