import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(student_code: string, password: string): Promise<any>;
    login(student_code: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshTokens(userId: number, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: number): Promise<import("src/modules/users").User>;
    private getTokens;
    private updateRefreshToken;
    register(user: any): Promise<import("src/modules/users").User>;
}
