import {
  AdBase,
  AdDetailBase,
  CheckPolicies,
  CreateAdBasePolicyHandler,
  DeleteAdBasePolicyHandler,
  JwtAuthGuard,
  PoliciesGuard,
  ReadAdBasePolicyHandler,
  UpdateAdBasePolicyHandler,
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
import { CreateBaseDetailDto } from '../dtos/create-base-detail.dto';
import { CreateBaseDto } from '../dtos/create-base.dto';
import { QueryBaseDto } from '../dtos/query-base.dto';
import { UpdateBaseDto } from '../dtos/update-base.dto';
import { BaseService } from '../services/base.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('ads')
export class BaseController {
  constructor(private readonly baseService: BaseService) {}

  @CheckPolicies(new ReadAdBasePolicyHandler())
  @Get()
  async readAll(@Query() queryBaseDto: QueryBaseDto): Promise<AdBase[]> {
    return await this.baseService.findAll(queryBaseDto);
  }

  @CheckPolicies(new ReadAdBasePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdBase> {
    const adBase = await this.baseService.findOneById(id);
    if (!adBase)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return adBase;
  }

  @CheckPolicies(new CreateAdBasePolicyHandler())
  @Post()
  async create(
    @Body('ad') createBaseDto: CreateBaseDto,
    @Body('adDetail') createBaseDetailDto: CreateBaseDetailDto
  ): Promise<{ ad: AdBase; adDetail: AdDetailBase }> {
    const data = await this.baseService.create(
      createBaseDto,
      createBaseDetailDto
    );
    if (!data) throw new BadRequestException(`Resource could not created`);
    return data;
  }

  @CheckPolicies(new UpdateAdBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateBaseDto: UpdateBaseDto
  ): Promise<AdBase> {
    const adBase = await this.baseService.update(id, updateBaseDto);
    if (!adBase)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return adBase;
  }

  @CheckPolicies(new DeleteAdBasePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdBase> {
    const adBase = await this.baseService.remove(id);
    if (!adBase)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return adBase;
  }
}
