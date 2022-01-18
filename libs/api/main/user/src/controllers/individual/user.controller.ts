import {
  CheckPolicies,
  CreateGeneralUserIndividualPolicyHandler,
  DeleteGeneralUserIndividualPolicyHandler,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralUserIndividualPolicyHandler,
  UpdateGeneralUserIndividualPolicyHandler,
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
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { CreateUserIndividualDto } from '../../dtos/individual/create-user.dto';
import { QueryUserIndividualDto } from '../../dtos/individual/query-user.dto';
import { UpdateUserIndividualDto } from '../../dtos/individual/update-user.dto';
import { ApiMainUserIndividualService } from '../../services/individual/user.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('users-individual')
export class ApiMainUserIndividualController {
  constructor(
    private readonly userIndividualService: ApiMainUserIndividualService
  ) {}

  @CheckPolicies(new ReadGeneralUserIndividualPolicyHandler())
  @Get()
  async readAll(
    @Query() queryUserIndividualDto: QueryUserIndividualDto
  ): Promise<UserIndividual[]> {
    return await this.userIndividualService.findAll(queryUserIndividualDto);
  }

  @CheckPolicies(new ReadGeneralUserIndividualPolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<UserIndividual> {
    const userIndividual = await this.userIndividualService.findOneById(id);
    if (!userIndividual)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return userIndividual;
  }

  @CheckPolicies(new CreateGeneralUserIndividualPolicyHandler())
  @Post()
  async create(
    @Body() createUserIndividualDto: CreateUserIndividualDto
  ): Promise<UserIndividual> {
    const userIndividual = await this.userIndividualService.create(
      createUserIndividualDto
    );
    if (!userIndividual)
      throw new BadRequestException(`Resource could not created`);
    return userIndividual;
  }

  @CheckPolicies(new UpdateGeneralUserIndividualPolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserIndividualDto: UpdateUserIndividualDto
  ): Promise<UserIndividual> {
    const userIndividual = await this.userIndividualService.update(
      id,
      updateUserIndividualDto
    );
    if (!userIndividual)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return userIndividual;
  }

  @CheckPolicies(new DeleteGeneralUserIndividualPolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserIndividual> {
    const userIndividual = await this.userIndividualService.remove(id);
    if (!userIndividual)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return userIndividual;
  }
}
