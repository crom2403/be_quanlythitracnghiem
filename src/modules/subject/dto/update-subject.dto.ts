import { PartialType } from '@nestjs/swagger';
import { CreateSubjectDto } from 'src/modules/subject/dto/create-subject.dto';

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}
