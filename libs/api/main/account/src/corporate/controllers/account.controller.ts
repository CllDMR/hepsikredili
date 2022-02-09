import {
  AccountCorporate,
  CheckPolicies,
  CreateAccountCorporatePolicyHandler,
  DeleteAccountCorporatePolicyHandler,
  JwtAuthGuard,
  PoliciesGuard,
  ReadAccountCorporatePolicyHandler,
  UpdateAccountCorporatePolicyHandler,
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
import { CreateAccountCorporateDto } from '../dtos/create-account.dto';
import { QueryAccountCorporateDto } from '../dtos/query-account.dto';
import { UpdateAccountCorporateDto } from '../dtos/update-account.dto';
import { ApiMainAccountCorporateService } from '../services/account.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('accounts-corporate')
export class ApiMainAccountCorporateController {
  constructor(
    private readonly accountCorporateService: ApiMainAccountCorporateService
  ) {}

  @CheckPolicies(new ReadAccountCorporatePolicyHandler())
  @Get()
  async readAll(
    @Query() queryAccountCorporateDto: QueryAccountCorporateDto
  ): Promise<AccountCorporate[]> {
    return await this.accountCorporateService.findAll(queryAccountCorporateDto);
  }

  @CheckPolicies(new ReadAccountCorporatePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AccountCorporate> {
    const accountCorporate = await this.accountCorporateService.findOneById(id);
    if (!accountCorporate)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return accountCorporate;
  }

  @CheckPolicies(new CreateAccountCorporatePolicyHandler())
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

  @CheckPolicies(new UpdateAccountCorporatePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
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

  @CheckPolicies(new DeleteAccountCorporatePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AccountCorporate> {
    const accountCorporate = await this.accountCorporateService.remove(id);
    if (!accountCorporate)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return accountCorporate;
  }
}
