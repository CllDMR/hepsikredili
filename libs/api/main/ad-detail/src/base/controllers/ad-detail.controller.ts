import {
  AdDetailBase,
  CheckPolicies,
  CreateGeneralAdDetailBasePolicyHandler,
  DeleteGeneralAdDetailBasePolicyHandler,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralAdDetailBasePolicyHandler,
  UpdateGeneralAdDetailBasePolicyHandler,
} from '@hepsikredili/api/main/shared';
import { ValidateMongooseObjectIdPipe } from '@hepsikredili/api/shared';
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

  @CheckPolicies(new ReadGeneralAdDetailBasePolicyHandler())
  @Get()
  async readAll(
    @Query() queryAdDetailDto: QueryAdDetailDto
  ): Promise<AdDetailBase[]> {
    return await this.adDetailService.findAll(queryAdDetailDto);
  }

  @CheckPolicies(new ReadGeneralAdDetailBasePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdDetailBase> {
    const adDetail = await this.adDetailService.findOneById(id);
    if (!adDetail)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return adDetail;
  }

  @CheckPolicies(new CreateGeneralAdDetailBasePolicyHandler())
  @Post()
  async create(
    @Body() createAdDetailDto: CreateAdDetailDto
  ): Promise<AdDetailBase> {
    const adDetail = await this.adDetailService.create(createAdDetailDto);
    if (!adDetail) throw new BadRequestException(`Resource could not created`);
    return adDetail;
  }

  @CheckPolicies(new UpdateGeneralAdDetailBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateAdDetailDto: UpdateAdDetailDto
  ): Promise<AdDetailBase> {
    const adDetail = await this.adDetailService.update(id, updateAdDetailDto);
    if (!adDetail)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return adDetail;
  }

  @CheckPolicies(new DeleteGeneralAdDetailBasePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdDetailBase> {
    const adDetail = await this.adDetailService.remove(id);
    if (!adDetail)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return adDetail;
  }
}
