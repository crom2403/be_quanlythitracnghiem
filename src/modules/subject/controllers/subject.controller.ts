import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dtos';
import { CreateSubjectDto, CreateAssignmentDto } from '../dtos';
import { SubjectService } from '../services';

@ApiBearerAuth() // Yêu cầu Swagger sử dụng Bearer Token cho tất cả API trong controller này
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.subjectService.getAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const subject = await this.subjectService.getById(+id);
    if (!subject) {
      throw new NotFoundException('Subject not found');
    } else {
      return subject;
    }
  }

  @Get('admin/assign-teacher')
  async getAssignmentByAdmin(
    @Request() req: any,
    @Query() paginationDto: PaginationDto,
  ) {
    const userId = req.user?.sub.userId;
    return await this.subjectService.getAssignmentByAdmin(
      +userId,
      paginationDto,
    );
  }

  // Phân công giáo viên cho môn học
  @Post('assign-teacher')
  async assignTeacherToSubject(
    @Request() req: any,
    @Body() createAssignmentDto: CreateAssignmentDto,
  ) {
    const userId = req.user?.sub.userId;

    return await this.subjectService.createAssignment(
      userId,
      createAssignmentDto,
    );
  }

  @Delete('admin/delete-assign-teacher/:assignId')
  async deleteAssignTeacher(
    @Request() req: any,
    @Param('assignId') assignId: string,
  ) {
    const userId = req.user?.sub.userId;

    return await this.subjectService.deleteAssignTeacher(userId, +assignId);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createSubjectDto: CreateSubjectDto) {
    return await this.subjectService.create(createSubjectDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Subject deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.subjectService.delete(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Subject updated successfully.' })
  update(@Param('id') id: string, @Body() updateSubjectDto: CreateSubjectDto) {
    return this.subjectService.update(+id, updateSubjectDto);
  }
}
