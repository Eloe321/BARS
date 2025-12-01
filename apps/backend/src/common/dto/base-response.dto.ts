import { ApiProperty } from '@nestjs/swagger';

// Base response wrapper (Keep It Simple)
export class BaseResponseDto<T> {
  @ApiProperty({ 
    description: 'Human-readable message',
    example: 'Operation completed successfully'
  })
  message: string;

  @ApiProperty({ 
    description: 'Response data'
  })
  data: T;
}

// Pagination metadata (reusable across all paginated endpoints)
export class PaginationMetaDto {
  @ApiProperty({ 
    description: 'Total number of results',
    example: 42
  })
  total: number;

  @ApiProperty({ 
    description: 'Current page number',
    example: 1
  })
  page: number;

  @ApiProperty({ 
    description: 'Results per page',
    example: 10
  })
  limit: number;

  @ApiProperty({ 
    description: 'Total pages',
    example: 5
  })
  totalPages: number;
}

// Paginated response (reusable for any paginated list)
export class PaginatedResponseDto<T> {
  @ApiProperty({ 
    description: 'Array of items',
    isArray: true
  })
  items: T[];

  @ApiProperty({ 
    type: PaginationMetaDto,
    description: 'Pagination metadata'
  })
  pagination: PaginationMetaDto;
}
