import { UpdateSubjectDto } from '../dtos';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos';
import { PaginationResult } from 'src/common/interfaces';
import { CreateAssignmentDto, CreateSubjectDto } from '../dtos';
import { Subject, TeacherSubject } from '../entities';
import { User } from 'src/modules/users/entities';
export declare class SubjectService {
    private subjectRepository;
    private userRepository;
    private teacherSubjectRepository;
    constructor(subjectRepository: Repository<Subject>, userRepository: Repository<User>, teacherSubjectRepository: Repository<TeacherSubject>);
    getAll(paginationDto: PaginationDto): Promise<PaginationResult<Subject>>;
    getById(id: number): Promise<Subject>;
    create(createSubjectDto: CreateSubjectDto): Promise<Subject>;
    update(id: number, updateSubjectDto: UpdateSubjectDto): Promise<Subject>;
    delete(id: number): Promise<string>;
    assignTeacherToSubject(userId: number, subjectId: number): Promise<any>;
    createAssignment(userId: number, createAssignDto: CreateAssignmentDto[]): Promise<any>;
}
