export declare class LoginDto {
    student_code: string;
    password: string;
}
export declare class RegisterDto extends LoginDto {
    email: string;
    fullName: string;
}
export declare class TokenDto {
    refreshToken: string;
}
