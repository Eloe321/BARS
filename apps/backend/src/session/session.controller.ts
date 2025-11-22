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
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';

interface RequestWithUser extends Request {
  user: {
    id: string;
    // Add other user properties if needed
  };
}

@ApiTags('songs')
@Controller('songs')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

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
    @Body() createSessionDto: CreateSessionDto,
    @Req() req: RequestWithUser,
  ) {
    // Ensure the user_id matches the authenticated user
    createSessionDto.user_id = req.user.id;
    return this.sessionService.create(createSessionDto);
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

    return this.sessionService.findAll(filters);
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
    const session = await this.sessionService.findOne(id);

    if (!session) {
      throw new HttpException('Session not found', HttpStatus.NOT_FOUND);
    }

    // Ensure the user owns this song
    if (session.user_id !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return session;
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
    @Body() updateSessionDto: UpdateSessionDto,
    @Req() req: RequestWithUser,
  ) {
    // First check if the session exists and belongs to the user
    const existingSession = await this.sessionService.findOne(id);

    if (!existingSession) {
      throw new HttpException('Session not found', HttpStatus.NOT_FOUND);
    }

    if (existingSession.user_id !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    // Remove user_id from update DTO if present to prevent ownership transfer
    if (updateSessionDto.user_id) {
      delete updateSessionDto.user_id;
    }

    return this.sessionService.update(id, updateSessionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a song' })
  @ApiParam({ name: 'id', description: 'Song ID' })
  @ApiResponse({
    status: 200,
    description: 'The session has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Song not found.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async remove(@Param('id') id: string, @Req() req: RequestWithUser) {
    // First check if the song exists and belongs to the user
    const existingSession = await this.sessionService.findOne(id);

    if (!existingSession) {
      throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    }

    if (existingSession.user_id !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return this.sessionService.remove(id);
  }
}
