import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Request,
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

  @Get('student/:student_code')
  async getStudyGroupByStudentId(@Param('student_code') student_code: string) {
    return this.studyGroupService.getStudyGroupByStudentCode(student_code);
  }

  @Get('detail/:id')
  async getAllStudentOfStudyGroup(@Param('id') id: string) {
    return this.studyGroupService.getAllStudentOfStudyGroup(+id);
  }

  @Get('teacher/:teacher_id')
  async getStudyGroupByTeacherId(@Param('teacher_id') teacher_id: string) {
    return this.studyGroupService.getStudyGroupByTeacherId(+teacher_id);
  }

  @Get(':id')
  async getStudyGroupById(@Param('id') id: string) {
    return this.studyGroupService.getStudyGroupById(+id);
  }

  @Get('change-invite-code/:studyGroupId')
  async changeInviteCode(@Param('studyGroupId') studyGroupId: string) {
    return this.studyGroupService.changeInviteCode(+studyGroupId);
  }

  @Post()
  async createStudyGroup(@Body() createStudyGroupDto: CreateStudyGroupDto) {
    return this.studyGroupService.createStudyGroup(createStudyGroupDto);
  }

  @Post('invite')
  async addStudentInviteCode(
    @Request() req,
    @Body() createStudyGroupDto: { invite_code: string },
  ) {
    console.log(req.user);
    const userId = req.user?.sub.userId;
    return this.studyGroupService.addStudentInviteCode(
      createStudyGroupDto.invite_code,
      userId,
    );
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
