import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PaginationResult } from 'src/common/interfaces/pagination.interface';
import { CreateAssignmentDto } from 'src/modules/subject/dto/create-assignment.dto';
import { CreateSubjectDto } from 'src/modules/subject/dto/create-subject.dto';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import { TeacherSubject } from 'src/modules/subject/entities/teacher-subject.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(TeacherSubject)
    private teacherSubjectRepository: Repository<TeacherSubject>,
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

  async assignTeacherToSubject(
    userId: number,
    subjectId: number,
  ): Promise<any> {
    const subject = await this.subjectRepository.findOneBy({ id: subjectId });
    const teacher = await this.userRepository.findOneBy({ id: userId });
    if (!subject) {
      throw new NotFoundException('Subject not found, cannot assign teacher');
    }
    if (!teacher) {
      throw new NotFoundException('Teacher not found, cannot assign teacher');
    }

    // Tạo phân công mới
    const teacherSubject = this.teacherSubjectRepository.create({
      subject,
      teacher,
    });
    await this.teacherSubjectRepository.save(teacherSubject);
  }

  // Tạo phân công cho giáo viên
  async createAssignment(
    userId: number,
    createAssignDto: CreateAssignmentDto[],
  ): Promise<any> {
    // Xóa tất cả các phân công cũ của giáo viên
    await this.teacherSubjectRepository.delete({ teacher: { id: userId } });

    // Tạo mới các phân công mới
    createAssignDto.forEach(async (assign) => {
      if (assign.isAssign) {
        await this.assignTeacherToSubject(userId, assign.subject_id);
      }
    });

    return {
      message: 'Assign teacher to subject successfully',
    };
  }
}
