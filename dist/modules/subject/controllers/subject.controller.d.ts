import { PaginationDto } from 'src/common/dtos';
import { CreateSubjectDto, CreateAssignmentDto } from '../dtos';
import { SubjectService } from '../services';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    findAll(paginationDto: PaginationDto): Promise<import("../../../common").PaginationResult<import("..").Subject>>;
    findOne(id: string): Promise<import("..").Subject>;
    assignTeacherToSubject(req: any, createAssignmentDto: CreateAssignmentDto[]): Promise<any>;
    create(createSubjectDto: CreateSubjectDto): Promise<import("..").Subject>;
    remove(id: string): Promise<string>;
    update(id: string, updateSubjectDto: CreateSubjectDto): Promise<import("..").Subject>;
}
