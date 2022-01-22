import {
  AccountBase,
  CheckPolicies,
  CreateGeneralAccountBasePolicyHandler,
  DeleteGeneralAccountBasePolicyHandler,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralAccountBasePolicyHandler,
  UpdateGeneralAccountBasePolicyHandler,
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
import { CreateAccountBaseDto } from '../../dtos/base/create-account.dto';
import { QueryAccountBaseDto } from '../../dtos/base/query-account.dto';
import { UpdateAccountBaseDto } from '../../dtos/base/update-account.dto';
import { ApiMainAccountBaseService } from '../../services/base/account.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('accounts-base')
export class ApiMainAccountBaseController {
  constructor(private readonly accountBaseService: ApiMainAccountBaseService) {}

  @CheckPolicies(new ReadGeneralAccountBasePolicyHandler())
  @Get()
  async readAll(
    @Query() queryAccountBaseDto: QueryAccountBaseDto
  ): Promise<AccountBase[]> {
    return await this.accountBaseService.findAll(queryAccountBaseDto);
  }

  @CheckPolicies(new ReadGeneralAccountBasePolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<AccountBase> {
    const accountBase = await this.accountBaseService.findOneById(id);
    if (!accountBase)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return accountBase;
  }

  @CheckPolicies(new CreateGeneralAccountBasePolicyHandler())
  @Post()
  async create(
    @Body() createAccountBaseDto: CreateAccountBaseDto
  ): Promise<AccountBase> {
    const accountBase = await this.accountBaseService.create(
      createAccountBaseDto
    );
    if (!accountBase)
      throw new BadRequestException(`Resource could not created`);
    return accountBase;
  }

  @CheckPolicies(new UpdateGeneralAccountBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAccountBaseDto: UpdateAccountBaseDto
  ): Promise<AccountBase> {
    const accountBase = await this.accountBaseService.update(
      id,
      updateAccountBaseDto
    );
    if (!accountBase)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return accountBase;
  }

  @CheckPolicies(new DeleteGeneralAccountBasePolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<AccountBase> {
    const accountBase = await this.accountBaseService.remove(id);
    if (!accountBase)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return accountBase;
  }
}
