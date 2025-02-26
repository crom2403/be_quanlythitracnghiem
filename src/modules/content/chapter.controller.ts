import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ChapterService } from 'src/modules/content/chapter.service';
import { CreateChapterDto } from 'src/modules/content/dto/create-chapter.dto';
import { UpdateChapterDto } from 'src/modules/content/dto/update-chapter.dto';

@Controller('/chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Get()
  findAll(
    @Query('subjectId') subjectId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.chapterService.getAllChapters(
      subjectId ? parseInt(subjectId) : null,
      paginationDto,
    );
  }

  @Get(':id')
  async getChapterById(@Param('id') id: string) {
    return await this.chapterService.getChapterById(+id);
  }

  @Post('/chapter')
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async createChapter(@Body() createChapterDto: CreateChapterDto) {
    return await this.chapterService.createChapter(createChapterDto);
  }

  @Delete(':id')
  async deleteChapter(@Param('id') id: string) {
    return await this.chapterService.deleteChapter(+id);
  }

  @Put(':id')
  async updateChapter(
    @Param('id') id: string,
    @Body() updateChapterDto: UpdateChapterDto,
  ) {
    return await this.chapterService.updateChapter(+id, updateChapterDto);
  }
}
