import {
  CheckPolicies,
  CreatePublicUserPolicyHandler,
  DeletePublicUserPolicyHandler,
  JwtAuthGuard,
  PoliciesPublicGuard,
  ReadPublicUserPolicyHandler,
  UpdatePublicUserPolicyHandler,
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
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { CreateUserDto } from '../dtos/create-user.dto';
import { QueryUserDto } from '../dtos/query-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ApiMainUserService } from '../services/user.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesPublicGuard)
@Controller('users')
export class ApiMainUserController {
  constructor(private readonly userService: ApiMainUserService) {}

  @CheckPolicies(new ReadPublicUserPolicyHandler())
  @Get()
  async readAll(@Query() queryUserDto: QueryUserDto): Promise<User[]> {
    return await this.userService.findAll(queryUserDto);
  }

  @CheckPolicies(new ReadPublicUserPolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findOneById(id);
    if (!user)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return user;
  }

  @CheckPolicies(new CreatePublicUserPolicyHandler())
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userService.create(createUserDto);
    if (!user) throw new BadRequestException(`Resource could not created`);
    return user;
  }

  @CheckPolicies(new UpdatePublicUserPolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    const user = await this.userService.update(id, updateUserDto);
    if (!user)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return user;
  }

  @CheckPolicies(new DeletePublicUserPolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    const user = await this.userService.remove(id);
    if (!user)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return user;
  }
}