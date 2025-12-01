import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Controller('link')
@ApiTags('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new link' })
  @ApiResponse({ status: 201, description: 'Link created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createLinkDto: CreateLinkDto) {
    return this.linkService.create(createLinkDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all links' })
  @ApiResponse({ status: 200, description: 'Links retrieved successfully' })
  findAll() {
    return this.linkService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get link by ID' })
  @ApiResponse({ status: 200, description: 'Link retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Link not found' })
  findOne(@Param('id') id: string) {
    return this.linkService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update link by ID' })
  @ApiResponse({ status: 200, description: 'Link updated successfully' })
  @ApiResponse({ status: 404, description: 'Link not found' })
  update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
    return this.linkService.update(+id, updateLinkDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete link by ID' })
  @ApiResponse({ status: 200, description: 'Link deleted successfully' })
  @ApiResponse({ status: 404, description: 'Link not found' })
  remove(@Param('id') id: string) {
    return this.linkService.remove(+id);
  }
}
