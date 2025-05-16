// src/songs/songs.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
  HttpStatus,
  HttpException,
  Req, // Import Request
} from '@nestjs/common';
import { Request } from 'express'; // Import Express Request type
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';

interface RequestWithUser extends Request {
  user: {
    id: string;
    // Add other user properties if needed
  };
}

@ApiTags('songs')
@Controller('songs')
export class SongController {
  constructor(private readonly songsService: SongService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new song' })
  @ApiResponse({
    status: 201,
    description: 'The song has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async create(
    @Body() createSongDto: CreateSongDto,
    @Req() req: RequestWithUser,
  ) {
    // Ensure the user_id matches the authenticated user
    createSongDto.user_id = req.user.id;
    return this.songsService.create(createSongDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all songs for the current user' })
  @ApiResponse({
    status: 200,
    description: 'Return all songs for the current user.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiQuery({ name: 'source', required: false, enum: ['PREMADE', 'UPLOADED'] })
  async findAll(@Req() req: RequestWithUser, @Query('source') source?: string) {
    if (!req.user) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const filters: { user_id: string; musicSource?: string } = {
      user_id: req.user.id,
    };

    if (source) {
      filters.musicSource = source;
    }

    return this.songsService.findAll(filters);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a song by id' })
  @ApiParam({ name: 'id', description: 'Song ID' })
  @ApiResponse({ status: 200, description: 'Return the song.' })
  @ApiResponse({ status: 404, description: 'Song not found.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async findOne(@Param('id') id: string, @Req() req: RequestWithUser) {
    const song = await this.songsService.findOne(id);

    if (!song) {
      throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    }

    // Ensure the user owns this song
    if (song.user_id !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return song;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a song' })
  @ApiParam({ name: 'id', description: 'Song ID' })
  @ApiResponse({
    status: 200,
    description: 'The song has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Song not found.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async update(
    @Param('id') id: string,
    @Body() updateSongDto: UpdateSongDto,
    @Req() req: RequestWithUser,
  ) {
    // First check if the song exists and belongs to the user
    const existingSong = await this.songsService.findOne(id);

    if (!existingSong) {
      throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    }

    if (existingSong.user_id !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    // Remove user_id from update DTO if present to prevent ownership transfer
    if (updateSongDto.user_id) {
      delete updateSongDto.user_id;
    }

    return this.songsService.update(id, updateSongDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a song' })
  @ApiParam({ name: 'id', description: 'Song ID' })
  @ApiResponse({
    status: 200,
    description: 'The song has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Song not found.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async remove(@Param('id') id: string, @Req() req: RequestWithUser) {
    // First check if the song exists and belongs to the user
    const existingSong = await this.songsService.findOne(id);

    if (!existingSong) {
      throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    }

    if (existingSong.user_id !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return this.songsService.remove(id);
  }
}
