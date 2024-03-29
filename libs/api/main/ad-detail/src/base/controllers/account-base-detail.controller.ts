import {
  AdDetailBase,
  CheckPolicies,
  DeleteAdDetailBasePolicyHandler,
  JwtAuthGuard,
  PoliciesGuard,
  ReadAdDetailBasePolicyHandler,
  UpdateAdDetailBasePolicyHandler,
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
  Query,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { QueryAccountBaseDto } from '../dtos/query-account-base.dto';
import { UpdateAccountBaseDto } from '../dtos/update-account-base.dto';
import { AccountBaseService } from '../services/account-base.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('accounts/:accountId/ad-details')
export class AccountBaseController {
  constructor(private readonly accountBaseService: AccountBaseService) {}

  @CheckPolicies(new ReadAdDetailBasePolicyHandler())
  @Get()
  async readAll(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Query() queryAccountBaseDto: QueryAccountBaseDto
  ): Promise<AdDetailBase[]> {
    return await this.accountBaseService.findAll(
      accountId,
      queryAccountBaseDto
    );
  }

  @CheckPolicies(new ReadAdDetailBasePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdDetailBase> {
    const adDetailBase = await this.accountBaseService.findOneById(
      accountId,
      id
    );
    if (!adDetailBase)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return adDetailBase;
  }

  @CheckPolicies(new UpdateAdDetailBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateAccountBaseDto: UpdateAccountBaseDto
  ): Promise<AdDetailBase> {
    const adDetailBase = await this.accountBaseService.update(
      accountId,
      id,
      updateAccountBaseDto
    );
    if (!adDetailBase)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return adDetailBase;
  }

  @CheckPolicies(new DeleteAdDetailBasePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdDetailBase> {
    const adDetailBase = await this.accountBaseService.remove(accountId, id);
    if (!adDetailBase)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return adDetailBase;
  }
}
