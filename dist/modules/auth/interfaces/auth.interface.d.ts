export interface JwtPayload {
    sub: number;
    email: string;
    iat?: number;
    exp?: number;
}
export interface Tokens {
    accessToken: string;
    refreshToken: string;
}
