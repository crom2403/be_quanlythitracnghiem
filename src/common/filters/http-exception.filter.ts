import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

// Interface cho response error
interface IError {
  statusCode: number;
  message: string;
  error: string;
  timestamp: string;
  path: string;
  method: string;
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = 'Internal Server Error';

    // Xử lý HttpException (lỗi từ NestJS)
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const excResponse = exception.getResponse();
      message =
        typeof excResponse === 'string' ? excResponse : excResponse['message'];
      error = exception.name;
    }
    // Xử lý lỗi từ TypeORM
    else if (exception instanceof QueryFailedError) {
      status = HttpStatus.BAD_REQUEST;
      message = (exception as any).message;
      error = 'Database Error';
    }
    // Xử lý các lỗi khác
    else if (exception instanceof Error) {
      message = exception.message;
      error = exception.name;
    }

    // Cấu trúc response error
    const errorResponse: IError = {
      statusCode: status,
      message: Array.isArray(message) ? message[0] : message,
      error: error,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    };

    // Log lỗi để debug
    console.error({
      error: exception,
      timestamp: errorResponse.timestamp,
      path: request.url,
      method: request.method,
    });

    response.status(status).json(errorResponse);
  }
}
