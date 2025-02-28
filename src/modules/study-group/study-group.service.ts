import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateStudyGroupDto } from 'src/modules/study-group/dto/create-studygroup.dto';
import { AcademicYear } from 'src/modules/study-group/entities/academic-year.entity';
import { Semester } from 'src/modules/study-group/entities/semester.entity';
import { StudyGroup } from 'src/modules/study-group/entities/study-group.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudyGroupService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(StudyGroup)
    private studyGroupRepository: Repository<StudyGroup>,
    @InjectRepository(Semester)
    private semesterRepository: Repository<Semester>,
    @InjectRepository(AcademicYear)
    private academicYearRepository: Repository<AcademicYear>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async getAllStudyGroups(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const [items, total] = await this.studyGroupRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'DESC',
      },
      relations: [
        'semester',
        'academic_year',
        'groupStudents',
        'groupStudents.student',
      ],
    });

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getStudyGroupById(id: number) {
    return await this.studyGroupRepository.findOne({
      where: { id },
      relations: [
        'semester',
        'academic_year',
        'groupStudents',
        'groupStudents.student',
      ],
    });
  }

  async createStudyGroup(studyGroupDto: CreateStudyGroupDto) {
    const user = await this.userRepository.findOne({
      where: {
        id: studyGroupDto.teacher_id,
      },
    });

    if (!user) {
      throw new Error('User not found , cannot create study group');
    }

    const academicYear = await this.academicYearRepository.findOne({
      where: {
        id: studyGroupDto.academic_year_id,
      },
    });

    if (!academicYear) {
      throw new Error('Academic year not found, cannot create study group');
    }

    // Add await here
    const semester = await this.semesterRepository.findOne({
      where: {
        id: studyGroupDto.semester_id,
      },
    });

    if (!semester) {
      throw new Error('Semester not found, cannot create study group');
    }

    const subject = await this.subjectRepository.findOne({
      where: {
        id: studyGroupDto.subject_id,
      },
    });

    if (!subject) {
      throw new Error('Subject not found, cannot create study group');
    }
    const inviteCode = Math.random().toString(36).substring(2, 10);

    const studyGroup = this.studyGroupRepository.create({
      name: studyGroupDto.name,
      note: studyGroupDto.note,
      invite_code: inviteCode,
      teacher: user,
      academic_year: academicYear,
      semester: semester,
      subject: subject,
    });

    return await this.studyGroupRepository.save(studyGroup);
  }
}
