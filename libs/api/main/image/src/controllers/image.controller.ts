import {
  CheckPolicies,
  Image,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralImagePolicyHandler,
} from '@hepsikredili/api/main/shared';
import { ValidateMongooseObjectIdPipe } from '@hepsikredili/api/shared';
import {
  BadRequestException,
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiMainImageService } from '../services/image.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('images')
export class ApiMainImageController {
  constructor(private readonly imageService: ApiMainImageService) {}

  @CheckPolicies(new ReadGeneralImagePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Image> {
    const image = await this.imageService.findOneById(id);
    if (!image)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return image;
  }
}
