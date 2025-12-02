import { HttpException, HttpStatus } from '@nestjs/common';

export abstract class BaseAppException extends HttpException {
  public readonly errorCode: string;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    statusCode: HttpStatus,
    errorCode: string,
    isOperational = true,
  ) {
    super(message, statusCode);
    this.errorCode = errorCode;
    this.isOperational = isOperational;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}
