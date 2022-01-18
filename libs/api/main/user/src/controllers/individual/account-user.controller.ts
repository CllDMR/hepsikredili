import {
  CheckPolicies,
  DeleteMembershipUserIndividualPolicyHandler,
  JwtAuthGuard,
  PoliciesMembershipGuard,
  ReadMembershipUserIndividualPolicyHandler,
  UpdateMembershipUserIndividualPolicyHandler,
  UserIndividual,
} from '@hepsikredili/api/main/shared';
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
import { QueryUserIndividualDto } from '../../dtos/individual/query-user.dto';
import { UpdateUserIndividualDto } from '../../dtos/individual/update-user.dto';
import { ApiMainAccountUserIndividualService } from '../../services/individual/account-user.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/users-individual')
export class ApiMainAccountUserIndividualController {
  constructor(
    private readonly accountUserIndividualService: ApiMainAccountUserIndividualService
  ) {}

  @CheckPolicies(new ReadMembershipUserIndividualPolicyHandler())
  @Get()
  async readAll(
    @Param('accountId') accountId: string,
    @Query() queryUserIndividualDto: QueryUserIndividualDto
  ): Promise<UserIndividual[]> {
    return await this.accountUserIndividualService.findAll(
      accountId,
      queryUserIndividualDto
    );
  }

  @CheckPolicies(new ReadMembershipUserIndividualPolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId') accountId: string,
    @Param('id') id: string
  ): Promise<UserIndividual> {
    const userIndividual = await this.accountUserIndividualService.findOneById(
      accountId,
      id
    );
    if (!userIndividual)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return userIndividual;
  }

  @CheckPolicies(new UpdateMembershipUserIndividualPolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId') accountId: string,
    @Param('id') id: string,
    @Body() updateUserIndividualDto: UpdateUserIndividualDto
  ): Promise<UserIndividual> {
    const userIndividual = await this.accountUserIndividualService.update(
      accountId,
      id,
      updateUserIndividualDto
    );
    if (!userIndividual)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return userIndividual;
  }

  @CheckPolicies(new DeleteMembershipUserIndividualPolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId') accountId: string,
    @Param('id') id: string
  ): Promise<UserIndividual> {
    const userIndividual = await this.accountUserIndividualService.remove(
      accountId,
      id
    );
    if (!userIndividual)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return userIndividual;
  }
}
