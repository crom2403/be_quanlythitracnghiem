import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos';
import { PaginationResult } from 'src/common/interfaces';
import { CreateChapterDto, UpdateChapterDto } from '../dtos';
import { Chapter } from '../entities';
import { Subject } from 'src/modules/subject/entities';
export declare class ChapterService {
    private chapterRepository;
    private subjectRepository;
    constructor(chapterRepository: Repository<Chapter>, subjectRepository: Repository<Subject>);
    getAllChapters(subjectId: number | null, paginationDto: PaginationDto): Promise<PaginationResult<Chapter> | Chapter[]>;
    getChapterById(id: number): Promise<Chapter>;
    createChapter(createChapterDto: CreateChapterDto): Promise<Chapter>;
    updateChapter(id: number, updateChapterDto: UpdateChapterDto): Promise<Chapter>;
    deleteChapter(id: number): Promise<string>;
}
