import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtService } from '@nestjs/jwt';

// Interceptor xử lý token errors
// - Bắt các lỗi token hết hạn
// - Trả về message phù hợp cho client
@Injectable()
export class TokenInterceptor implements NestInterceptor {
  constructor(private readonly jwtService: JwtService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error.name === 'TokenExpiredError') {
          return throwError(
            () => new UnauthorizedException('Token đã hết hạn'),
          );
        }
        if (error.name === 'JsonWebTokenError') {
          return throwError(
            () => new UnauthorizedException('Token không hợp lệ'),
          );
        }
        return throwError(() => error);
      }),
    );
  }
}
