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
import { ApiResponse } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateAssignmentDto } from 'src/modules/subject/dto/create-assignment.dto';
import { CreateSubjectDto } from 'src/modules/subject/dto/create-subject.dto';
import { SubjectService } from 'src/modules/subject/subject.service';

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

  // Phân công giáo viên cho môn học
  @Post('assign-teacher')
  async assignTeacherToSubject(
    @Request() req,
    @Body() createAssignmentDto: CreateAssignmentDto[],
  ) {
    const userId = req.user?.sub.userId;
    console.log('userId', userId);

    return await this.subjectService.createAssignment(
      userId,
      createAssignmentDto,
    );
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
