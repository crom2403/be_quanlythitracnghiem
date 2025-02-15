// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { InjectRepository } from '@nestjs/typeorm';
// import { jwtConfig } from 'src/config/jwt.config';
// import { User } from 'src/modules/users/entities/user.entity';
// import { Repository } from 'typeorm';

// // Service xử lý refresh token
// @Injectable()
// export class TokenService {
//   constructor(
//     @InjectRepository(RefreshToken)
//     private refreshTokenRepo: Repository<RefreshToken>,
//     private jwtService: JwtService,
//   ) {}

//   async createRefreshToken(user: User): Promise<string> {
//     const token = this.jwtService.sign(
//       { sub: user.id },
//       {
//         secret: jwtConfig.refresh.secret,
//         expiresIn: jwtConfig.refresh.expiresIn,
//       },
//     );

//     await this.refreshTokenRepo.save({
//       token,
//       userId: user.id,
//       expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 ngày
//     });

//     return token;
//   }

//   async refreshAccessToken(refreshToken: string): Promise<string> {
//     // Verify refresh token
//     const payload = await this.jwtService.verify(refreshToken, {
//       secret: jwtConfig.refresh.secret,
//     });

//     // Kiểm tra token có trong database không
//     const tokenExists = await this.refreshTokenRepo.findOne({
//       where: { token: refreshToken, userId: payload.sub },
//     });

//     if (!tokenExists) {
//       throw new UnauthorizedException('Invalid refresh token');
//     }

//     // Tạo access token mới
//     return this.jwtService.sign(
//       { sub: payload.sub },
//       {
//         secret: jwtConfig.access.secret,
//         expiresIn: jwtConfig.access.expiresIn,
//       },
//     );
//   }
// }
