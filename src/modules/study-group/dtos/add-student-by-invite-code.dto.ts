import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddStudentByInviteCodeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '1' })
  invite_code: string;
}
