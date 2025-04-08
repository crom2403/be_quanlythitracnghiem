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
import {
  AddStudentByInviteCodeDto,
  AddStudentManualDto,
  CreateStudyGroupDto,
} from '../dtos';
import { StudyGroupService } from '../services';

@Controller('study-group')
export class StudyGroupController {
  constructor(private readonly studyGroupService: StudyGroupService) {}

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

  @Get()
  async getStudyGroups(@Query() paginationDto: PaginationDto) {
    return this.studyGroupService.getAllStudyGroups(paginationDto);
  }

  @Post('invite')
  async addStudentInviteCode(
    @Request() req,
    @Body() addStudentByInviteCodeDto: AddStudentByInviteCodeDto,
  ) {
    console.log(req.user);
    const userId = req.user?.sub.userId;
    return this.studyGroupService.addStudentInviteCode(
      userId,
      addStudentByInviteCodeDto.invite_code,
    );
  }

  @Post('manual')
  async addStudentManual(@Body() body: AddStudentManualDto) {
    return this.studyGroupService.addStudentManual(body);
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
