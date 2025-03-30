import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Mã sinh viên', example: 'dh52106677' })
  student_code: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  @ApiProperty({ description: 'Mật khẩu', example: '123456' })
  password: string;
}

export class RegisterDto extends LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;
}

export class TokenDto {
  @IsString()
  refreshToken: string;
}
