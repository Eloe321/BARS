import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseResponseDto } from '../dto/base-response.dto';

/**
 * Transforms all successful responses into BaseResponseDto format
 * Automatically wraps controller return values with message and data fields
 */
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, BaseResponseDto<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<BaseResponseDto<T>> {
    return next.handle().pipe(
      map((data) => {
        // If data is already wrapped in BaseResponseDto format, return as-is
        if (data && typeof data === 'object' && 'message' in data && 'data' in data) {
          return data as BaseResponseDto<T>;
        }

        // Otherwise, wrap the data with default success message
        return {
          message: 'Success',
          data,
        };
      }),
    );
  }
}
