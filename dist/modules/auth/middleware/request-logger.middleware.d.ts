import { Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export declare class RequestLoggerMiddleware implements NestMiddleware {
    private readonly logger;
    constructor(logger: Logger);
    use(req: Request, res: Response, next: NextFunction): void;
}
