"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
const entities_2 = require("../../subject/entities");
const entities_3 = require("../../users/entities");
const users_1 = require("../../users");
let StudyGroupService = class StudyGroupService {
    constructor(userRepository, studyGroupRepository, groupStudentRepository, semesterRepository, academicYearRepository, subjectRepository, userService) {
        this.userRepository = userRepository;
        this.studyGroupRepository = studyGroupRepository;
        this.groupStudentRepository = groupStudentRepository;
        this.semesterRepository = semesterRepository;
        this.academicYearRepository = academicYearRepository;
        this.subjectRepository = subjectRepository;
        this.userService = userService;
    }
    async onModuleInit() {
        await this.createDefaultAcademicYear();
        await this.createDefaultSemester();
    }
    async createDefaultAcademicYear() {
        const count = await this.academicYearRepository.count();
        if (count == 0) {
            const currentYear = new Date().getFullYear() + 2;
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
    async getAllStudyGroups(paginationDto) {
        const { page, limit } = paginationDto;
        const [items, total] = await this.studyGroupRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'DESC',
            },
            relations: ['semester', 'academic_year', 'subject', 'teacher'],
            select: {
                id: true,
                name: true,
                semester: {
                    id: true,
                    name: true,
                },
                academic_year: {
                    id: true,
                    start_year: true,
                },
                subject: {
                    id: true,
                    name: true,
                },
                teacher: {
                    id: true,
                    fullname: true,
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
    async getStudyGroupById(id) {
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
    async createStudyGroup(studyGroupDto) {
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
    async deleteStudyGroup(id) {
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
    async getStudyGroupByInviteCode(inviteCode) {
        return await this.studyGroupRepository.findOne({
            where: {
                invite_code: inviteCode,
            },
            relations: ['groupStudents', 'groupStudents.student'],
        });
    }
    async getStudyGroupByTeacherId(teacherId) {
        return await this.studyGroupRepository.find({
            where: {
                teacher: {
                    id: teacherId,
                },
            },
            relations: ['group_students'],
        });
    }
    async getStudyGroupByStudentId(studentId) {
        return await this.studyGroupRepository.find({
            where: {
                group_students: {
                    student: {
                        id: studentId,
                    },
                },
            },
            relations: ['group_students', 'exam_study_group'],
        });
    }
    async addStudentManual(body) {
        console.log(body);
        const student = await this.userRepository.findOne({
            where: {
                student_code: body.student_code,
            },
        });
        if (student) {
            throw new Error(`Student với mã ${body.student_code} đã tồn tại`);
        }
        const newStudent = await this.userService.create(body);
        const studyGroup = await this.studyGroupRepository.findOne({
            where: {
                id: +body.studyGroupId,
            },
        });
        if (!studyGroup) {
            throw new Error('Study group not found');
        }
        const groupStudent = this.groupStudentRepository.create({
            study_group: studyGroup,
            student: newStudent,
        });
        return await this.groupStudentRepository.save(groupStudent);
    }
    async addStudentAutp() {
        return null;
    }
    async getAllGroupsOfStudent(studentId) {
        return await this.groupStudentRepository.find({
            where: {
                student: {
                    id: studentId,
                },
            },
            relations: ['group_students', 'academic_year', 'semester'],
        });
    }
    async getListExamOfStudyGroups(listIdStudyGroup) {
        const result = await this.studyGroupRepository.find({
            where: {
                id: (0, typeorm_2.In)(listIdStudyGroup),
            },
            relations: [
                'exam_study_group',
                'semester',
                'academic_year',
                'subject',
                'exam_study_group.exam',
            ],
            select: {
                id: true,
                name: true,
                note: true,
                exam_study_group: {
                    id: true,
                    exam: {
                        id: true,
                        name: true,
                        start_time: true,
                        end_time: true,
                    },
                },
                subject: {
                    id: true,
                    name: true,
                },
                semester: {
                    id: true,
                    name: true,
                },
                academic_year: {
                    id: true,
                    start_year: true,
                    end_year: true,
                },
            },
        });
        return result;
    }
};
exports.StudyGroupService = StudyGroupService;
exports.StudyGroupService = StudyGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_3.User)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.StudyGroup)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.GroupStudent)),
    __param(3, (0, typeorm_1.InjectRepository)(entities_1.Semester)),
    __param(4, (0, typeorm_1.InjectRepository)(entities_1.AcademicYear)),
    __param(5, (0, typeorm_1.InjectRepository)(entities_2.Subject)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        users_1.UsersService])
], StudyGroupService);
//# sourceMappingURL=study-group.service.js.map