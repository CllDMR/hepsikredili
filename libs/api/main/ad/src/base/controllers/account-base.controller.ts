import {
  AdBase,
  AdDetailBase,
  CheckPolicies,
  CreateMembershipAdBasePolicyHandler,
  DeleteMembershipAdBasePolicyHandler,
  JwtAuthGuard,
  PoliciesMembershipGuard,
  ReadMembershipAdBasePolicyHandler,
  UpdateMembershipAdBasePolicyHandler,
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
import { CreateAccountBaseDetailDto } from '../dtos/create-account-base-detail.dto';
import { CreateAccountBaseDto } from '../dtos/create-account-base.dto';
import { QueryAccountBaseDto } from '../dtos/query-account-base.dto';
import { UpdateAccountBaseDto } from '../dtos/update-account-base.dto';
import { AccountBaseService } from '../services/account-base.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/ads')
export class AccountBaseController {
  constructor(private readonly accountBaseService: AccountBaseService) {}

  @CheckPolicies(new ReadMembershipAdBasePolicyHandler())
  @Get()
  async readAll(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Query() queryAccountBaseDto: QueryAccountBaseDto
  ): Promise<AdBase[]> {
    return await this.accountBaseService.findAll(
      accountId,
      queryAccountBaseDto
    );
  }

  @CheckPolicies(new ReadMembershipAdBasePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdBase> {
    const adBase = await this.accountBaseService.findOneById(accountId, id);
    if (!adBase)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return adBase;
  }

  @CheckPolicies(new CreateMembershipAdBasePolicyHandler())
  @Post()
  async create(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Body('ad') createAccountBaseDto: CreateAccountBaseDto,
    @Body('adDetail') createAccountBaseDetailDto: CreateAccountBaseDetailDto
  ): Promise<{ ad: AdBase; adDetail: AdDetailBase }> {
    const data = await this.accountBaseService.create(
      accountId,
      createAccountBaseDto,
      createAccountBaseDetailDto
    );
    if (!data) throw new BadRequestException(`Resource could not created`);
    return data;
  }

  @CheckPolicies(new UpdateMembershipAdBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateAccountBaseDto: UpdateAccountBaseDto
  ): Promise<AdBase> {
    const adBase = await this.accountBaseService.update(
      accountId,
      id,
      updateAccountBaseDto
    );
    if (!adBase)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return adBase;
  }

  @CheckPolicies(new DeleteMembershipAdBasePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdBase> {
    const adBase = await this.accountBaseService.remove(accountId, id);
    if (!adBase)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return adBase;
  }
}
