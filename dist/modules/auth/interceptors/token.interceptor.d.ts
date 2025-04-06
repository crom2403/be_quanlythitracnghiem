import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
export declare class TokenInterceptor implements NestInterceptor {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
