import {
  Controller,
  Get,
  Query,
  Param,
  HttpException,
  HttpStatus,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { DictionaryService } from './dictionary.service';
import { SearchDictionaryDto } from './dto/search-dictionary.dto';
import { DictionarySearchResponseDto } from './dto/dictionary-response.dto';
import { DictionaryDetailResponseDto } from './dto/dictionary-detail-response.dto';

@ApiTags('dictionary')
@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get('search')
  @ApiOperation({ 
    summary: 'Search dictionary entries',
    description: 'Returns a list of matching entries (main entries only, excluding supplementary entries). Use this for the search results list in the frontend.'
  })
  @ApiResponse({
    status: 200,
    description: 'Search results returned successfully',
    type: DictionarySearchResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request - invalid parameters' })
  @ApiQuery({ name: 'query', description: 'Search term', example: 'buang' })
  @ApiQuery({ 
    name: 'searchType', 
    required: false, 
    enum: ['word', 'translation', 'both'],
    description: 'Type of search to perform',
    example: 'both'
  })
  @ApiQuery({ name: 'page', required: false, description: 'Page number', example: 1 })
  @ApiQuery({ name: 'limit', required: false, description: 'Results per page', example: 10 })
  async search(
    @Query(new ValidationPipe({ transform: true })) searchDto: SearchDictionaryDto,
  ): Promise<DictionarySearchResponseDto> {
    try {
      return await this.dictionaryService.search(searchDto);
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to search dictionary',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('entry/:id')
  @ApiOperation({ 
    summary: 'Get full entry details by ID',
    description: 'Returns complete parsed entry with all supplementary entries merged. Use this when user clicks on a search result.'
  })
  @ApiParam({ name: 'id', description: 'Entry ID', example: 3082 })
  @ApiResponse({
    status: 200,
    description: 'Entry found with supplementary entries merged',
    type: DictionaryDetailResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Entry not found' })
  async findByEntryId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DictionaryDetailResponseDto> {
    return await this.dictionaryService.findByEntryId(id);
  }

  @Get('word/:word')
  @ApiOperation({ 
    summary: 'Get full entry details by word',
    description: 'Returns complete parsed entry with all supplementary entries merged. Alternative to entry ID lookup.'
  })
  @ApiParam({ name: 'word', description: 'Word to look up', example: 'buang' })
  @ApiResponse({
    status: 200,
    description: 'Entry found with supplementary entries merged',
    type: DictionaryDetailResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Word not found' })
  async findByWord(@Param('word') word: string): Promise<DictionaryDetailResponseDto> {
    return await this.dictionaryService.findByWord(word);
  }
}