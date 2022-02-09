import {
  AccountBase,
  CheckPolicies,
  CreateAccountBasePolicyHandler,
  DeleteAccountBasePolicyHandler,
  JwtAuthGuard,
  PoliciesGuard,
  ReadAccountBasePolicyHandler,
  UpdateAccountBasePolicyHandler,
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
import { CreateAccountBaseDto } from '../dtos/create-account.dto';
import { QueryAccountBaseDto } from '../dtos/query-account.dto';
import { UpdateAccountBaseDto } from '../dtos/update-account.dto';
import { ApiMainAccountBaseService } from '../services/account.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('accounts-base')
export class ApiMainAccountBaseController {
  constructor(private readonly accountBaseService: ApiMainAccountBaseService) {}

  @CheckPolicies(new ReadAccountBasePolicyHandler())
  @Get()
  async readAll(
    @Query() queryAccountBaseDto: QueryAccountBaseDto
  ): Promise<AccountBase[]> {
    return await this.accountBaseService.findAll(queryAccountBaseDto);
  }

  @CheckPolicies(new ReadAccountBasePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AccountBase> {
    const accountBase = await this.accountBaseService.findOneById(id);
    if (!accountBase)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return accountBase;
  }

  @CheckPolicies(new CreateAccountBasePolicyHandler())
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

  @CheckPolicies(new UpdateAccountBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
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

  @CheckPolicies(new DeleteAccountBasePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AccountBase> {
    const accountBase = await this.accountBaseService.remove(id);
    if (!accountBase)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return accountBase;
  }
}
