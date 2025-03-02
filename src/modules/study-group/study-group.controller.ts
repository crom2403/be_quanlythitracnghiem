import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateStudyGroupDto } from 'src/modules/study-group/dto/create-studygroup.dto';
import { StudyGroupService } from 'src/modules/study-group/study-group.service';

@Controller('study-group')
export class StudyGroupController {
  constructor(private readonly studyGroupService: StudyGroupService) {}

  @Get()
  async getStudyGroups(@Query() paginationDto: PaginationDto) {
    return this.studyGroupService.getAllStudyGroups(paginationDto);
  }

  @Get(':id')
  async getStudyGroupById(@Param('id') id: string) {
    return this.studyGroupService.getStudyGroupById(+id);
  }

  @Post()
  async createStudyGroup(@Body() createStudyGroupDto: CreateStudyGroupDto) {
    return this.studyGroupService.createStudyGroup(createStudyGroupDto);
  }

  @Delete(':id')
  async deleteStudyGroup(@Param('id') id: string) {
    return this.studyGroupService.deleteStudyGroup(+id);
  }
}
