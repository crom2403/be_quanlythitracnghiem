import { ApiProperty } from '@nestjs/swagger';
import { CreateExamManualDto } from './create-exam-manual.dto';

export class CreateExamAutoDto extends CreateExamManualDto {
  @ApiProperty()
  listIdChapters: number[];
}
