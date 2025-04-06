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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
const entities_2 = require("../../users/entities");
let SubjectService = class SubjectService {
    constructor(subjectRepository, userRepository, teacherSubjectRepository) {
        this.subjectRepository = subjectRepository;
        this.userRepository = userRepository;
        this.teacherSubjectRepository = teacherSubjectRepository;
    }
    async getAll(paginationDto) {
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
    async getById(id) {
        return await this.subjectRepository.findOneBy({ id });
    }
    async create(createSubjectDto) {
        const existingSubject = await this.subjectRepository.findOneBy({
            public_id: createSubjectDto.public_id,
        });
        if (existingSubject) {
            throw new common_1.NotFoundException('Subject already exists');
        }
        const newSubject = this.subjectRepository.create(createSubjectDto);
        return await this.subjectRepository.save(newSubject);
    }
    async update(id, updateSubjectDto) {
        await this.subjectRepository.update(id, updateSubjectDto);
        return await this.subjectRepository.findOneBy({ id });
    }
    async delete(id) {
        const result = await this.subjectRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Subject with ID ${id} not found`);
        }
        else {
            return `Subject with Id ${id} deleted successfully`;
        }
    }
    async assignTeacherToSubject(userId, subjectId) {
        const subject = await this.subjectRepository.findOneBy({ id: subjectId });
        const teacher = await this.userRepository.findOneBy({ id: userId });
        if (!subject) {
            throw new common_1.NotFoundException('Subject not found, cannot assign teacher');
        }
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher not found, cannot assign teacher');
        }
        const teacherSubject = this.teacherSubjectRepository.create({
            subject,
            teacher,
        });
        await this.teacherSubjectRepository.save(teacherSubject);
    }
    async createAssignment(userId, createAssignDto) {
        await this.teacherSubjectRepository.delete({ teacher: { id: userId } });
        createAssignDto.forEach(async (assign) => {
            if (assign.isAssign) {
                await this.assignTeacherToSubject(userId, assign.subject_id);
            }
        });
        return {
            message: 'Assign teacher to subject successfully',
        };
    }
};
exports.SubjectService = SubjectService;
exports.SubjectService = SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Subject)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_2.User)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.TeacherSubject)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SubjectService);
//# sourceMappingURL=subject.service.js.map