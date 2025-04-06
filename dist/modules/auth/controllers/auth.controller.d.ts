import { AuthService } from '../services';
import { LoginDto } from '../dtos';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: number): Promise<import("../..").User>;
    refreshTokens(userId: number, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
