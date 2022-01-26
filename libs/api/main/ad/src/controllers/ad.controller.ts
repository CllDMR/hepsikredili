import {
  CheckPolicies,
  CreateGeneralAdPolicyHandler,
  DeleteGeneralAdPolicyHandler,
  JwtAuthGuard,
  Ad,
  PoliciesGeneralGuard,
  ReadGeneralAdPolicyHandler,
  UpdateGeneralAdPolicyHandler,
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
import { CreateAdDto } from '../dtos/create-ad.dto';
import { QueryAdDto } from '../dtos/query-ad.dto';
import { UpdateAdDto } from '../dtos/update-ad.dto';
import { ApiMainAdService } from '../services/ad.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('ads')
export class ApiMainAdController {
  constructor(private readonly adService: ApiMainAdService) {}

  @CheckPolicies(new ReadGeneralAdPolicyHandler())
  @Get()
  async readAll(@Query() queryAdDto: QueryAdDto): Promise<Ad[]> {
    return await this.adService.findAll(queryAdDto);
  }

  @CheckPolicies(new ReadGeneralAdPolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<Ad> {
    const ad = await this.adService.findOneById(id);
    if (!ad) throw new BadRequestException(`Resource not found with id: ${id}`);
    return ad;
  }

  @CheckPolicies(new CreateGeneralAdPolicyHandler())
  @Post()
  async create(@Body() createAdDto: CreateAdDto): Promise<Ad> {
    const ad = await this.adService.create(createAdDto);
    if (!ad) throw new BadRequestException(`Resource could not created`);
    return ad;
  }

  @CheckPolicies(new UpdateGeneralAdPolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdDto: UpdateAdDto
  ): Promise<Ad> {
    const ad = await this.adService.update(id, updateAdDto);
    if (!ad)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return ad;
  }

  @CheckPolicies(new DeleteGeneralAdPolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Ad> {
    const ad = await this.adService.remove(id);
    if (!ad)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return ad;
  }
}
