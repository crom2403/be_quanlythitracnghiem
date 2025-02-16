import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Phương thức xác thực user
  async validateUser(student_code: string, password: string): Promise<any> {
    // Tìm user theo student_code
    const user = await this.usersService.findByStudentCode(student_code);

    if (!user) {
      return null;
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Không trả về password
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  // Login và tạo JWT token
  async login(student_code: string, password: string) {
    const user = await this.usersService.findByStudentCode(student_code);
    if (!user) {
      throw new UnauthorizedException('Thông tin không hợp lệ');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Mật khẩu không hợp lệ');
    }

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }
  // Xử lý refresh token
  // - Kiểm tra user có tồn tại và có refresh token không
  // - Verify refresh token có match với token đã lưu
  // - Tạo cặp token mới
  async refreshTokens(userId: number, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user || !user.refreshToken) {
      throw new UnauthorizedException('Access Denied');
    }

    const refreshTokenMatches = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    );
    if (!refreshTokenMatches) {
      throw new UnauthorizedException('Access Denied');
    }

    const tokens = await this.getTokens(user.id, user.student_code);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  // Xử lý logout
  // - Xóa refresh token trong database
  async logout(userId: number) {
    return this.usersService.update(userId, { refreshToken: null });
  }

  // Hàm private tạo cặp token mới
  // - Access token có thời hạn 15 phút
  // - Refresh token có thời hạn 7 ngày
  private async getTokens(userId: number, student_code: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          student_code,
        },
        {
          secret: process.env.JWT_ACCESS_SECRET,
          expiresIn: '1d',
          // expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          student_code,
        },
        {
          secret: process.env.JWT_REFRESH_SECRET,
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  // Hàm private cập nhật refresh token
  // - Hash refresh token trước khi lưu vào database
  private async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.usersService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  // Register new User
  async register(user: any) {
    return this.usersService.create(user);
  }
}
