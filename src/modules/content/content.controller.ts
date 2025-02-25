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
import { ContentService } from 'src/modules/content/content.service';
import { CreateChapterDto } from 'src/modules/content/dto/create-chapter.dto';
import { UpdateChapterDto } from 'src/modules/content/dto/update-chapter.dto';

@Controller('')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('/chapter')
  findAll(
    @Query('subjectId') subjectId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.contentService.getAllChapters(
      subjectId ? parseInt(subjectId) : null,
      paginationDto,
    );
  }

  @Get('/chapter/:id')
  async getChapterById(@Param('id') id: string) {
    return await this.contentService.getChapterById(+id);
  }

  @Post('/chapter')
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async createChapter(@Body() createChapterDto: CreateChapterDto) {
    return await this.contentService.createChapter(createChapterDto);
  }

  @Delete('/chapter/:id')
  async deleteChapter(@Param('id') id: string) {
    return await this.contentService.deleteChapter(+id);
  }

  @Put('/chapter/:id')
  async updateChapter(
    @Param('id') id: string,
    @Body() updateChapterDto: UpdateChapterDto,
  ) {
    return await this.contentService.updateChapter(+id, updateChapterDto);
  }
}
