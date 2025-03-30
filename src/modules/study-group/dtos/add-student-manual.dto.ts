import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from 'src/modules/users';

export class AddStudentManualDto extends CreateUserDto {
  @IsNotEmpty()
  @IsString({})
  @ApiProperty({ example: '1' })
  studyGroupId: string;
}
