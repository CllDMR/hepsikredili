import {
  CheckPolicies,
  DeleteMembershipUserCorporatePolicyHandler,
  JwtAuthGuard,
  PoliciesMembershipGuard,
  ReadMembershipUserCorporatePolicyHandler,
  UpdateMembershipUserCorporatePolicyHandler,
  UserCorporate,
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
import { QueryUserCorporateDto } from '../../dtos/corporate/query-user.dto';
import { UpdateUserCorporateDto } from '../../dtos/corporate/update-user.dto';
import { ApiMainAccountUserCorporateService } from '../../services/corporate/account-user.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/users-corporate')
export class ApiMainAccountUserCorporateController {
  constructor(
    private readonly accountUserCorporateService: ApiMainAccountUserCorporateService
  ) {}

  @CheckPolicies(new ReadMembershipUserCorporatePolicyHandler())
  @Get()
  async readAll(
    @Param('accountId') accountId: string,
    @Query() queryUserCorporateDto: QueryUserCorporateDto
  ): Promise<UserCorporate[]> {
    return await this.accountUserCorporateService.findAll(
      accountId,
      queryUserCorporateDto
    );
  }

  @CheckPolicies(new ReadMembershipUserCorporatePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId') accountId: string,
    @Param('id') id: string
  ): Promise<UserCorporate> {
    const userCorporate = await this.accountUserCorporateService.findOneById(
      accountId,
      id
    );
    if (!userCorporate)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return userCorporate;
  }

  @CheckPolicies(new UpdateMembershipUserCorporatePolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId') accountId: string,
    @Param('id') id: string,
    @Body() updateUserCorporateDto: UpdateUserCorporateDto
  ): Promise<UserCorporate> {
    const userCorporate = await this.accountUserCorporateService.update(
      accountId,
      id,
      updateUserCorporateDto
    );
    if (!userCorporate)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return userCorporate;
  }

  @CheckPolicies(new DeleteMembershipUserCorporatePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId') accountId: string,
    @Param('id') id: string
  ): Promise<UserCorporate> {
    const userCorporate = await this.accountUserCorporateService.remove(
      accountId,
      id
    );
    if (!userCorporate)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return userCorporate;
  }
}
