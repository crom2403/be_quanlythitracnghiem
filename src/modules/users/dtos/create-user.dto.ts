import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'DH52101234' })
  student_code: string;

  @IsEmail()
  @ApiProperty({ example: 'user@example.com' })
  @IsOptional()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Nguyễn Văn A' })
  fullname: string;

  @IsString()
  @ApiProperty({ example: 'Nam' })
  @IsOptional()
  gender: string;

  @IsString()
  @ApiProperty({ example: '2002-03-24' })
  @IsOptional()
  birthday: string;

  @IsString()
  @ApiProperty({ example: 'student' })
  @IsOptional()
  role: string = 'student';

  @IsNotEmpty()
  @MinLength(6, { message: 'Mật khẩu tối thiểu 6 ký tự' })
  @ApiProperty({ example: '123456' })
  password: string;

  @IsBoolean()
  @IsOptional()
  status: boolean;
}
