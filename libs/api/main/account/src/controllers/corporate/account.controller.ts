import {
  AccountCorporate,
  CheckPolicies,
  CreateGeneralAccountCorporatePolicyHandler,
  DeleteGeneralAccountCorporatePolicyHandler,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralAccountCorporatePolicyHandler,
  UpdateGeneralAccountCorporatePolicyHandler,
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
import { CreateAccountCorporateDto } from '../../dtos/corporate/create-account.dto';
import { QueryAccountCorporateDto } from '../../dtos/corporate/query-account.dto';
import { UpdateAccountCorporateDto } from '../../dtos/corporate/update-account.dto';
import { ApiMainAccountCorporateService } from '../../services/corporate/account.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('accounts-corporate')
export class ApiMainAccountCorporateController {
  constructor(
    private readonly accountCorporateService: ApiMainAccountCorporateService
  ) {}

  @CheckPolicies(new ReadGeneralAccountCorporatePolicyHandler())
  @Get()
  async readAll(
    @Query() queryAccountCorporateDto: QueryAccountCorporateDto
  ): Promise<AccountCorporate[]> {
    return await this.accountCorporateService.findAll(queryAccountCorporateDto);
  }

  @CheckPolicies(new ReadGeneralAccountCorporatePolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<AccountCorporate> {
    const accountCorporate = await this.accountCorporateService.findOneById(id);
    if (!accountCorporate)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return accountCorporate;
  }

  @CheckPolicies(new CreateGeneralAccountCorporatePolicyHandler())
  @Post()
  async create(
    @Body() createAccountCorporateDto: CreateAccountCorporateDto
  ): Promise<AccountCorporate> {
    const accountCorporate = await this.accountCorporateService.create(
      createAccountCorporateDto
    );
    if (!accountCorporate)
      throw new BadRequestException(`Resource could not created`);
    return accountCorporate;
  }

  @CheckPolicies(new UpdateGeneralAccountCorporatePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAccountCorporateDto: UpdateAccountCorporateDto
  ): Promise<AccountCorporate> {
    const accountCorporate = await this.accountCorporateService.update(
      id,
      updateAccountCorporateDto
    );
    if (!accountCorporate)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return accountCorporate;
  }

  @CheckPolicies(new DeleteGeneralAccountCorporatePolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<AccountCorporate> {
    const accountCorporate = await this.accountCorporateService.remove(id);
    if (!accountCorporate)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return accountCorporate;
  }
}
