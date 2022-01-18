import {
  CheckPolicies,
  CreateGeneralUserCorporatePolicyHandler,
  DeleteGeneralUserCorporatePolicyHandler,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralUserCorporatePolicyHandler,
  UpdateGeneralUserCorporatePolicyHandler,
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
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { CreateUserCorporateDto } from '../../dtos/corporate/create-user.dto';
import { QueryUserCorporateDto } from '../../dtos/corporate/query-user.dto';
import { UpdateUserCorporateDto } from '../../dtos/corporate/update-user.dto';
import { ApiMainUserCorporateService } from '../../services/corporate/user.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('users-corporate')
export class ApiMainUserCorporateController {
  constructor(
    private readonly userCorporateService: ApiMainUserCorporateService
  ) {}

  @CheckPolicies(new ReadGeneralUserCorporatePolicyHandler())
  @Get()
  async readAll(
    @Query() queryUserCorporateDto: QueryUserCorporateDto
  ): Promise<UserCorporate[]> {
    return await this.userCorporateService.findAll(queryUserCorporateDto);
  }

  @CheckPolicies(new ReadGeneralUserCorporatePolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<UserCorporate> {
    const userCorporate = await this.userCorporateService.findOneById(id);
    if (!userCorporate)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return userCorporate;
  }

  @CheckPolicies(new CreateGeneralUserCorporatePolicyHandler())
  @Post()
  async create(
    @Body() createUserCorporateDto: CreateUserCorporateDto
  ): Promise<UserCorporate> {
    const userCorporate = await this.userCorporateService.create(
      createUserCorporateDto
    );
    if (!userCorporate)
      throw new BadRequestException(`Resource could not created`);
    return userCorporate;
  }

  @CheckPolicies(new UpdateGeneralUserCorporatePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserCorporateDto: UpdateUserCorporateDto
  ): Promise<UserCorporate> {
    const userCorporate = await this.userCorporateService.update(
      id,
      updateUserCorporateDto
    );
    if (!userCorporate)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return userCorporate;
  }

  @CheckPolicies(new DeleteGeneralUserCorporatePolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserCorporate> {
    const userCorporate = await this.userCorporateService.remove(id);
    if (!userCorporate)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return userCorporate;
  }
}
