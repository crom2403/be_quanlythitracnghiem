import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos';
import { PaginationResult } from 'src/common/interfaces';
import { CreateStudyGroupDto } from '../dtos';
import { StudyGroup, Semester, AcademicYear } from '../entities';
import { Subject } from 'src/modules/subject/entities';
import { User } from 'src/modules/users/entities';

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

  async onModuleInit() {
    await this.createDefaultAcademicYear();
    await this.createDefaultSemester();
  }

  async createDefaultAcademicYear() {
    const count = await this.academicYearRepository.count();
    if (count == 0) {
      const currentYear = new Date().getFullYear() + 2; // Lấy năm hiện tại
      const academicYears = [];

      for (let i = 7; i > 0; i--) {
        academicYears.push({
          start_year: currentYear - i - 1,
          end_year: currentYear - i,
        });
      }
      console.log(academicYears);

      for (const academicYear of academicYears) {
        const academicYearEntity = this.academicYearRepository.create({
          start_year: academicYear.start_year,
          end_year: academicYear.end_year,
        });
        await this.academicYearRepository.save(academicYearEntity);
      }
      console.log('Create academic year success');
    }
  }

  async createDefaultSemester() {
    const count = await this.semesterRepository.count();
    if (count == 0) {
      const semesters = ['Học kỳ 1', 'Học kỳ 2', 'Học kỳ hè'];
      for (const semester of semesters) {
        const semesterEntity = this.semesterRepository.create({
          name: semester,
        });
        await this.semesterRepository.save(semesterEntity);
      }
      console.log('Create semester success');
    }
  }

  async getAllStudyGroups(
    paginationDto: PaginationDto,
  ): Promise<PaginationResult<StudyGroup> | StudyGroup[]> {
    const { page, limit } = paginationDto;
    const [items, total] = await this.studyGroupRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'DESC',
      },
      relations: ['semester', 'academic_year', 'subject', 'teacher'],
      select: {
        id: true, // Chọn thuộc tính id của StudyGroup
        name: true, // Chọn thuộc tính name của StudyGroup
        semester: {
          id: true, // Chọn thuộc tính id của semester
          name: true, // Chọn thuộc tính name của semester
        },
        academic_year: {
          id: true, // Chọn thuộc tính id của academic_year
          start_year: true, // Chọn thuộc tính year của academic_year
        },
        subject: {
          id: true, // Chọn thuộc tính id của subject
          name: true, // Chọn thuộc tính name của subject
        },
        teacher: {
          id: true, // Chọn thuộc tính id của teacher
          fullname: true, // Chọn thuộc tính name của teacher
        },
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

  // async joinStudyGroup(inviteCode: string, studentId: number) {
  //   const studyGroup = await this.studyGroupRepository.findOne({
  //     where: {
  //       invite_code: inviteCode,
  //     },
  //     relations: ['groupStudents', 'groupStudents.student'],
  //   });

  //   if (!studyGroup) {
  //     throw new Error('Study group not found');
  //   }

  //   const student = await this.userRepository.findOne({
  //     where: {
  //       id: studentId,
  //     },
  //   });

  //   if (!student) {
  //     throw new Error('Student not found');
  //   }

  //   const isStudentInGroup = studyGroup.groupStudents.some(
  //     (groupStudent) => groupStudent.student.id === student.id,
  //   );

  //   if (isStudentInGroup) {
  //     throw new Error('Student is already in the study group');
  //   }

  //   studyGroup.groupStudents.push(student);

  //   return await this.studyGroupRepository.save(studyGroup);
  // }

  async deleteStudyGroup(id: number) {
    const studyGroup = await this.studyGroupRepository.findOne({
      where: {
        id,
      },
    });

    if (!studyGroup) {
      throw new Error('Study group not found');
    }
    return await this.studyGroupRepository.remove(studyGroup);
  }

  async getStudyGroupByInviteCode(inviteCode: string) {
    return await this.studyGroupRepository.findOne({
      where: {
        invite_code: inviteCode,
      },
      relations: ['groupStudents', 'groupStudents.student'],
    });
  }

  async getStudyGroupByTeacherId(teacherId: number) {
    return await this.studyGroupRepository.find({
      where: {
        teacher: {
          id: teacherId,
        },
      },
      relations: ['group_students'],
    });
  }

  async getStudyGroupByStudentId(studentId: number) {
    return await this.studyGroupRepository.find({
      where: {
        group_students: {
          student: {
            id: studentId,
          },
        },
      },
      relations: ['group_students'],
    });
  }
}
