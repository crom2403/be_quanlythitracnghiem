import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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

  @Get('teacher')
  async getStudyGroupByTeacherId(@Request() req: any) {
    const userId = req.user?.sub.userId;
    return this.studyGroupService.getStudyGroupByTeacherId(+userId);
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
  @Get('get-invite-code/:studyGroupId')
  async getInviteCode(@Param('studyGroupId') studyGroupId: string) {
    return this.studyGroupService.getInviteCodeByGroupId(+studyGroupId);
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

  @Delete('student/:id')
  async deleteStudentFromStudyGroup(
    @Param('id', ParseIntPipe) studyGroupId: number,
    @Query('student_code') student_code: string,
  ) {
    return this.studyGroupService.deleteStudentFromStudyGroup(
      +studyGroupId,
      student_code,
    );
  }
}
