import {
  CheckPolicies,
  DeleteMembershipUserBasePolicyHandler,
  JwtAuthGuard,
  PoliciesMembershipGuard,
  ReadMembershipUserBasePolicyHandler,
  UpdateMembershipUserBasePolicyHandler,
  UserBase,
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
import { QueryUserBaseDto } from '../../dtos/base/query-user.dto';
import { UpdateUserBaseDto } from '../../dtos/base/update-user.dto';
import { ApiMainAccountUserBaseService } from '../../services/base/account-user.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/users-base')
export class ApiMainAccountUserBaseController {
  constructor(
    private readonly accountUserBaseService: ApiMainAccountUserBaseService
  ) {}

  @CheckPolicies(new ReadMembershipUserBasePolicyHandler())
  @Get()
  async readAll(
    @Param('accountId') accountId: string,
    @Query() queryUserBaseDto: QueryUserBaseDto
  ): Promise<UserBase[]> {
    return await this.accountUserBaseService.findAll(
      accountId,
      queryUserBaseDto
    );
  }

  @CheckPolicies(new ReadMembershipUserBasePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId') accountId: string,
    @Param('id') id: string
  ): Promise<UserBase> {
    const userBase = await this.accountUserBaseService.findOneById(
      accountId,
      id
    );
    if (!userBase)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return userBase;
  }

  @CheckPolicies(new UpdateMembershipUserBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId') accountId: string,
    @Param('id') id: string,
    @Body() updateUserBaseDto: UpdateUserBaseDto
  ): Promise<UserBase> {
    const userBase = await this.accountUserBaseService.update(
      accountId,
      id,
      updateUserBaseDto
    );
    if (!userBase)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return userBase;
  }

  @CheckPolicies(new DeleteMembershipUserBasePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId') accountId: string,
    @Param('id') id: string
  ): Promise<UserBase> {
    const userBase = await this.accountUserBaseService.remove(accountId, id);
    if (!userBase)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return userBase;
  }
}
