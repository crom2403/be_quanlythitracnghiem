import { PaginationDto } from 'src/common/dtos';
import { ChapterService } from '../services';
import { UpdateChapterDto, CreateChapterDto } from '../dtos';
export declare class ChapterController {
    private readonly chapterService;
    constructor(chapterService: ChapterService);
    findAll(subjectId: string, paginationDto: PaginationDto): Promise<import("../../../common").PaginationResult<import("..").Chapter> | import("..").Chapter[]>;
    getChapterById(id: string): Promise<import("..").Chapter>;
    createChapter(createChapterDto: CreateChapterDto): Promise<import("..").Chapter>;
    deleteChapter(id: string): Promise<string>;
    updateChapter(id: string, updateChapterDto: UpdateChapterDto): Promise<import("..").Chapter>;
}
