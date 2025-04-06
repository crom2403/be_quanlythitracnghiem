import { PaginationDto } from 'src/common/dtos';
import { AddStudentManualDto, CreateStudyGroupDto } from '../dtos';
import { StudyGroupService } from '../services';
export declare class StudyGroupController {
    private readonly studyGroupService;
    constructor(studyGroupService: StudyGroupService);
    getStudyGroups(paginationDto: PaginationDto): Promise<import("..").StudyGroup[] | import("../../../common").PaginationResult<import("..").StudyGroup>>;
    getStudyGroupById(id: string): Promise<import("..").StudyGroup>;
    createStudyGroup(createStudyGroupDto: CreateStudyGroupDto): Promise<import("..").StudyGroup>;
    deleteStudyGroup(id: string): Promise<import("..").StudyGroup>;
    addStudentManual(body: AddStudentManualDto): Promise<import("..").GroupStudent>;
}
