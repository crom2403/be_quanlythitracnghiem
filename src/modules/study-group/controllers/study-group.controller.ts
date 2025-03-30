import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationDto } from 'src/common/dtos';
import { AddStudentManualDto, CreateStudyGroupDto } from '../dtos';
import { StudyGroupService } from '../services';

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

  @Post('manual')
  async addStudentManual(@Body() body: AddStudentManualDto) {
    return this.studyGroupService.addStudentManual(body);
  }
}
