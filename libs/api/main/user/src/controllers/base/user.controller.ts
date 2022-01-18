import {
  CheckPolicies,
  CreateGeneralUserBasePolicyHandler,
  DeleteGeneralUserBasePolicyHandler,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralUserBasePolicyHandler,
  UpdateGeneralUserBasePolicyHandler,
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
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { CreateUserBaseDto } from '../../dtos/base/create-user.dto';
import { QueryUserBaseDto } from '../../dtos/base/query-user.dto';
import { UpdateUserBaseDto } from '../../dtos/base/update-user.dto';
import { ApiMainUserBaseService } from '../../services/base/user.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('users-base')
export class ApiMainUserBaseController {
  constructor(private readonly userBaseService: ApiMainUserBaseService) {}

  @CheckPolicies(new ReadGeneralUserBasePolicyHandler())
  @Get()
  async readAll(
    @Query() queryUserBaseDto: QueryUserBaseDto
  ): Promise<UserBase[]> {
    return await this.userBaseService.findAll(queryUserBaseDto);
  }

  @CheckPolicies(new ReadGeneralUserBasePolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<UserBase> {
    const userBase = await this.userBaseService.findOneById(id);
    if (!userBase)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return userBase;
  }

  @CheckPolicies(new CreateGeneralUserBasePolicyHandler())
  @Post()
  async create(
    @Body() createUserBaseDto: CreateUserBaseDto
  ): Promise<UserBase> {
    const userBase = await this.userBaseService.create(createUserBaseDto);
    if (!userBase) throw new BadRequestException(`Resource could not created`);
    return userBase;
  }

  @CheckPolicies(new UpdateGeneralUserBasePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserBaseDto: UpdateUserBaseDto
  ): Promise<UserBase> {
    const userBase = await this.userBaseService.update(id, updateUserBaseDto);
    if (!userBase)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return userBase;
  }

  @CheckPolicies(new DeleteGeneralUserBasePolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserBase> {
    const userBase = await this.userBaseService.remove(id);
    if (!userBase)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return userBase;
  }
}
