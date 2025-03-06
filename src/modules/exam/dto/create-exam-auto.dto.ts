import { ApiProperty } from '@nestjs/swagger';
import { CreateExamManualDto } from 'src/modules/exam/dto/create-exam-manual.dto';

export class CreateExamAutoDto extends CreateExamManualDto {
  @ApiProperty()
  listIdChapters: number[];
}
