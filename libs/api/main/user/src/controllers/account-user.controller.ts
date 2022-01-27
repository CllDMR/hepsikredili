import {
  CheckPolicies,
  DeleteMembershipUserPolicyHandler,
  JwtAuthGuard,
  PoliciesMembershipGuard,
  ReadMembershipUserPolicyHandler,
  UpdateMembershipUserPolicyHandler,
  User,
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
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Query() queryUserDto: QueryUserDto
  ): Promise<User[]> {
    return await this.accountUserService.findAll(accountId, queryUserDto);
  }

  @CheckPolicies(new ReadMembershipUserPolicyHandler())
  @Get(':userId')
  async readOneById(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('userId', ValidateMongooseObjectIdPipe) userId: string
  ): Promise<User> {
    const user = await this.accountUserService.findOneById(accountId, userId);
    if (!user)
      throw new BadRequestException(`Resource not found with id: ${userId}`);
    return user;
  }

  @CheckPolicies(new UpdateMembershipUserPolicyHandler())
  @Patch(':userId')
  async update(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('userId', ValidateMongooseObjectIdPipe) userId: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    const user = await this.accountUserService.update(
      accountId,
      userId,
      updateUserDto
    );
    if (!user)
      throw new BadRequestException(
        `Resource could not updated with id: ${userId}`
      );
    return user;
  }

  @CheckPolicies(new DeleteMembershipUserPolicyHandler())
  @Delete(':userId')
  async delete(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('userId', ValidateMongooseObjectIdPipe) userId: string
  ): Promise<User> {
    const user = await this.accountUserService.remove(accountId, userId);
    if (!user)
      throw new BadRequestException(
        `Resource could not deleted with id: ${userId}`
      );
    return user;
  }
}
