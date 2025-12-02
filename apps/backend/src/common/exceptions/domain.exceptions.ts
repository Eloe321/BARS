import { HttpStatus } from '@nestjs/common';
import { BaseAppException } from './base.exception';

export class AuthenticationException extends BaseAppException {
  constructor(message = 'Invalid credentials') {
    super(message, HttpStatus.UNAUTHORIZED, 'AUTHENTICATION_ERROR');
  }
}

export class ResourceNotFoundException extends BaseAppException {
  constructor(resource: string, identifier?: string) {
    const message = identifier
      ? `${resource} with identifier '${identifier}' not found`
      : `${resource} not found`;
    super(message, HttpStatus.NOT_FOUND, 'RESOURCE_NOT_FOUND');
  }
}

export class ConflictException extends BaseAppException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT, 'RESOURCE_CONFLICT');
  }
}
