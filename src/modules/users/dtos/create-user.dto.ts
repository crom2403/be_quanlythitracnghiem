import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'DH52101234' })
  student_code: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Nguyễn Văn A' })
  fullname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Nam' })
  gender: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '2002-03-24' })
  birthday: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'student' })
  role: string;

  @IsNotEmpty()
  @IsString({})
  @MinLength(6, { message: 'Mật khẩu tối thiểu 6 ký tự' })
  @ApiProperty({ example: '123456' })
  password: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
