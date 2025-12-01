import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

/**
 * Global exception filter to format all HTTP exceptions consistently
 * Returns errors in a standardized format with message and error details
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    // Extract error message(s) from exception
    const message =
      typeof exceptionResponse === 'string'
        ? exceptionResponse
        : (exceptionResponse as any).message || 'An error occurred';

    // Build standardized error response
    const errorResponse = {
      message: Array.isArray(message) ? message[0] : message,
      error: {
        statusCode: status,
        timestamp: new Date().toISOString(),
        details: Array.isArray(message) ? message : [message],
      },
    };

    response.status(status).json(errorResponse);
  }
}

/**
 * Catch-all exception filter for non-HTTP exceptions
 * Handles unexpected errors with 500 status
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof Error ? exception.message : 'Internal server error';

    const errorResponse = {
      message,
      error: {
        statusCode: status,
        timestamp: new Date().toISOString(),
        details: [message],
      },
    };

    response.status(status).json(errorResponse);
  }
}
