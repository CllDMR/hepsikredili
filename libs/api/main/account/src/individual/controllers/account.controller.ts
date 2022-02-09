import {
  AccountIndividual,
  CheckPolicies,
  CreateAccountIndividualPolicyHandler,
  DeleteAccountIndividualPolicyHandler,
  JwtAuthGuard,
  PoliciesGuard,
  ReadAccountIndividualPolicyHandler,
  UpdateAccountIndividualPolicyHandler,
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
import { CreateAccountIndividualDto } from '../dtos/create-account.dto';
import { QueryAccountIndividualDto } from '../dtos/query-account.dto';
import { UpdateAccountIndividualDto } from '../dtos/update-account.dto';
import { ApiMainAccountIndividualService } from '../services/account.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('accounts-individual')
export class ApiMainAccountIndividualController {
  constructor(
    private readonly accountIndividualService: ApiMainAccountIndividualService
  ) {}

  @CheckPolicies(new ReadAccountIndividualPolicyHandler())
  @Get()
  async readAll(
    @Query() queryAccountIndividualDto: QueryAccountIndividualDto
  ): Promise<AccountIndividual[]> {
    return await this.accountIndividualService.findAll(
      queryAccountIndividualDto
    );
  }

  @CheckPolicies(new ReadAccountIndividualPolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AccountIndividual> {
    const accountIndividual = await this.accountIndividualService.findOneById(
      id
    );
    if (!accountIndividual)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return accountIndividual;
  }

  @CheckPolicies(new CreateAccountIndividualPolicyHandler())
  @Post()
  async create(
    @Body() createAccountIndividualDto: CreateAccountIndividualDto
  ): Promise<AccountIndividual> {
    const accountIndividual = await this.accountIndividualService.create(
      createAccountIndividualDto
    );
    if (!accountIndividual)
      throw new BadRequestException(`Resource could not created`);
    return accountIndividual;
  }

  @CheckPolicies(new UpdateAccountIndividualPolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateAccountIndividualDto: UpdateAccountIndividualDto
  ): Promise<AccountIndividual> {
    const accountIndividual = await this.accountIndividualService.update(
      id,
      updateAccountIndividualDto
    );
    if (!accountIndividual)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return accountIndividual;
  }

  @CheckPolicies(new DeleteAccountIndividualPolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AccountIndividual> {
    const accountIndividual = await this.accountIndividualService.remove(id);
    if (!accountIndividual)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return accountIndividual;
  }
}
