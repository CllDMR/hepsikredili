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
import { CreateBaseDto } from '../dtos/create-base.dto';
import { QueryBaseDto } from '../dtos/query-base.dto';
import { UpdateBaseDto } from '../dtos/update-base.dto';
import { BaseService } from '../services/base.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('ad-details')
export class BaseController {
  constructor(private readonly baseService: BaseService) {}

  @CheckPolicies(new ReadGeneralAdDetailBasePolicyHandler())
  @Get()
  async readAll(@Query() queryBaseDto: QueryBaseDto): Promise<AdDetailBase[]> {
    return await this.baseService.findAll(queryBaseDto);
  }

  @CheckPolicies(new ReadGeneralAdDetailBasePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdDetailBase> {
    const adDetailBase = await this.baseService.findOneById(id);
    if (!adDetailBase)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return adDetailBase;
  }

  @CheckPolicies(new CreateGeneralAdDetailBasePolicyHandler())
  @Post()
  async create(@Body() createBaseDto: CreateBaseDto): Promise<AdDetailBase> {
    const adDetailBase = await this.baseService.create(createBaseDto);
    if (!adDetailBase)
      throw new BadRequestException(`Resource could not created`);
    return adDetailBase;
  }

  @CheckPolicies(new UpdateGeneralAdDetailBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateBaseDto: UpdateBaseDto
  ): Promise<AdDetailBase> {
    const adDetailBase = await this.baseService.update(id, updateBaseDto);
    if (!adDetailBase)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return adDetailBase;
  }

  @CheckPolicies(new DeleteGeneralAdDetailBasePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdDetailBase> {
    const adDetailBase = await this.baseService.remove(id);
    if (!adDetailBase)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return adDetailBase;
  }
}
