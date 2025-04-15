import { UpdateSubjectDto } from '../dtos';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos';
import { PaginationResult } from 'src/common/interfaces';
import { CreateAssignmentDto, CreateSubjectDto } from '../dtos';
import { Subject, TeacherSubject } from '../entities';
import { User } from 'src/modules/users/entities';

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
    createAssignDto: CreateAssignmentDto,
  ): Promise<any> {
    // Xóa tất cả các phân công cũ của giáo viên

    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['role'],
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.role.name !== 'admin') {
      throw new NotFoundException('User not admin');
    }

    const teacher = await this.userRepository.findOne({
      where: {
        id: createAssignDto.teacher_id,
      },
      relations: ['role'],
    });

    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }

    if (teacher.role.name !== 'teacher') {
      throw new NotFoundException('User not teacher');
    }

    await this.teacherSubjectRepository.delete({
      teacher: { id: teacher.id },
    });

    // Tạo mới các phân công mới
    if (createAssignDto.listAssignment.length) {
      createAssignDto.listAssignment.forEach(async (assign) => {
        await this.assignTeacherToSubject(teacher.id, assign.subject_id);
      });
    }

    return {
      message: 'Assign teacher to subject successfully',
    };
  }

  async getAssignmentByAdmin(userId: number, paginationDto: PaginationDto) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['role'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.role.name !== 'admin') {
      throw new NotFoundException('User not admin');
    }

    const { page, limit, teacher_name, subject_name } = paginationDto;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (teacher_name) {
      where.teacher = {
        fullname: Like(`%${teacher_name}%`), // Tìm kiếm gần đúng theo tên giáo viên
      };
    }
    if (subject_name) {
      where.subject = {
        name: Like(`%${subject_name}%`), // Tìm kiếm gần đúng theo tên môn học
      };
    }

    const [items, total] = await this.teacherSubjectRepository.findAndCount({
      relations: ['teacher', 'subject'],
      select: {
        id: true,
        teacher: {
          id: true,
          fullname: true,
        },
        subject: {
          id: true,
          public_id: true,
          name: true,
        },
      },
      where,
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

  async deleteAssignTeacher(userId: number, assignId: number): Promise<any> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['role'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.role.name !== 'admin') {
      throw new NotFoundException('User not admin');
    }
    const result = await this.teacherSubjectRepository.delete(assignId);
    if (result.affected === 0) {
      throw new NotFoundException(`Assignment with ID ${assignId} not found`);
    } else {
      return `Assignment with Id ${assignId} deleted successfully`;
    }
  }
}
