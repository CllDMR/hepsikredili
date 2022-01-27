import {
  CheckPolicies,
  CreateGeneralAdDetailPolicyHandler,
  DeleteGeneralAdDetailPolicyHandler,
  JwtAuthGuard,
  AdDetail,
  PoliciesGeneralGuard,
  ReadGeneralAdDetailPolicyHandler,
  UpdateGeneralAdDetailPolicyHandler,
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
import { CreateAdDetailDto } from '../dtos/create-ad-detail.dto';
import { QueryAdDetailDto } from '../dtos/query-ad-detail.dto';
import { UpdateAdDetailDto } from '../dtos/update-ad-detail.dto';
import { ApiMainAdDetailService } from '../services/ad-detail.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('ad-details')
export class ApiMainAdDetailController {
  constructor(private readonly adDetailService: ApiMainAdDetailService) {}

  @CheckPolicies(new ReadGeneralAdDetailPolicyHandler())
  @Get()
  async readAll(
    @Query() queryAdDetailDto: QueryAdDetailDto
  ): Promise<AdDetail[]> {
    return await this.adDetailService.findAll(queryAdDetailDto);
  }

  @CheckPolicies(new ReadGeneralAdDetailPolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<AdDetail> {
    const adDetail = await this.adDetailService.findOneById(id);
    if (!adDetail)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return adDetail;
  }

  @CheckPolicies(new CreateGeneralAdDetailPolicyHandler())
  @Post()
  async create(
    @Body() createAdDetailDto: CreateAdDetailDto
  ): Promise<AdDetail> {
    const adDetail = await this.adDetailService.create(createAdDetailDto);
    if (!adDetail) throw new BadRequestException(`Resource could not created`);
    return adDetail;
  }

  @CheckPolicies(new UpdateGeneralAdDetailPolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdDetailDto: UpdateAdDetailDto
  ): Promise<AdDetail> {
    const adDetail = await this.adDetailService.update(id, updateAdDetailDto);
    if (!adDetail)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return adDetail;
  }

  @CheckPolicies(new DeleteGeneralAdDetailPolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<AdDetail> {
    const adDetail = await this.adDetailService.remove(id);
    if (!adDetail)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return adDetail;
  }
}
