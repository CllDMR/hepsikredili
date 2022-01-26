import {
  CheckPolicies,
  CreateGeneralImagePolicyHandler,
  DeleteGeneralImagePolicyHandler,
  JwtAuthGuard,
  Image,
  PoliciesGeneralGuard,
  ReadGeneralImagePolicyHandler,
  UpdateGeneralImagePolicyHandler,
} from '@hepsikredili/api/main/shared';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { CreateImageDto } from '../dtos/create-image.dto';
import { QueryImageDto } from '../dtos/query-image.dto';
import { UpdateImageDto } from '../dtos/update-image.dto';
import { ApiMainImageService } from '../services/image.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('images')
export class ApiMainImageController {
  constructor(private readonly imageService: ApiMainImageService) {}

  @CheckPolicies(new ReadGeneralImagePolicyHandler())
  @Get()
  async readAll(@Query() queryImageDto: QueryImageDto): Promise<Image[]> {
    return await this.imageService.findAll(queryImageDto);
  }

  @CheckPolicies(new ReadGeneralImagePolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<Image> {
    const image = await this.imageService.findOneById(id);
    if (!image)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return image;
  }

  @CheckPolicies(new CreateGeneralImagePolicyHandler())
  @Post()
  async create(@Body() createImageDto: CreateImageDto): Promise<Image> {
    const image = await this.imageService.create(createImageDto);
    if (!image) throw new BadRequestException(`Resource could not created`);
    return image;
  }

  @CheckPolicies(new UpdateGeneralImagePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto
  ): Promise<Image> {
    const image = await this.imageService.update(id, updateImageDto);
    if (!image)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return image;
  }

  @CheckPolicies(new DeleteGeneralImagePolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Image> {
    const image = await this.imageService.remove(id);
    if (!image)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return image;
  }
}
