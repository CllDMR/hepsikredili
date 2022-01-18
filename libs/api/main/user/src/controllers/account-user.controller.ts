import {
  CheckPolicies,
  DeleteMembershipUserPolicyHandler,
  JwtAuthGuard,
  PoliciesMembershipGuard,
  ReadMembershipUserPolicyHandler,
  UpdateMembershipUserPolicyHandler,
  User,
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
import { QueryUserDto } from '../dtos/query-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ApiMainAccountUserService } from '../services/account-user.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/users')
export class ApiMainAccountUserController {
  constructor(private readonly accountUserService: ApiMainAccountUserService) {}

  @CheckPolicies(new ReadMembershipUserPolicyHandler())
  @Get()
  async readAll(
    @Param('accountId') accountId: string,
    @Query() queryUserDto: QueryUserDto
  ): Promise<User[]> {
    return await this.accountUserService.findAll(accountId, queryUserDto);
  }

  @CheckPolicies(new ReadMembershipUserPolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId') accountId: string,
    @Param('id') id: string
  ): Promise<User> {
    const user = await this.accountUserService.findOneById(accountId, id);
    if (!user)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return user;
  }

  @CheckPolicies(new UpdateMembershipUserPolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId') accountId: string,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    const user = await this.accountUserService.update(
      accountId,
      id,
      updateUserDto
    );
    if (!user)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return user;
  }

  @CheckPolicies(new DeleteMembershipUserPolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId') accountId: string,
    @Param('id') id: string
  ): Promise<User> {
    const user = await this.accountUserService.remove(accountId, id);
    if (!user)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return user;
  }
}
