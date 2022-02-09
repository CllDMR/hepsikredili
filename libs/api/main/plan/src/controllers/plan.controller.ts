import {
  CheckPolicies,
  CreatePlanPolicyHandler,
  DeletePlanPolicyHandler,
  JwtAuthGuard,
  Plan,
  PoliciesGuard,
  ReadPlanPolicyHandler,
  UpdatePlanPolicyHandler,
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
import { CreatePlanDto } from '../dtos/create-plan.dto';
import { QueryPlanDto } from '../dtos/query-plan.dto';
import { UpdatePlanDto } from '../dtos/update-plan.dto';
import { ApiMainPlanService } from '../services/plan.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('plans')
export class ApiMainPlanController {
  constructor(private readonly planService: ApiMainPlanService) {}

  @CheckPolicies(new ReadPlanPolicyHandler())
  @Get()
  async readAll(@Query() queryPlanDto: QueryPlanDto): Promise<Plan[]> {
    return await this.planService.findAll(queryPlanDto);
  }

  @CheckPolicies(new ReadPlanPolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Plan> {
    const plan = await this.planService.findOneById(id);
    if (!plan)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return plan;
  }

  @CheckPolicies(new CreatePlanPolicyHandler())
  @Post()
  async create(@Body() createPlanDto: CreatePlanDto): Promise<Plan> {
    const plan = await this.planService.create(createPlanDto);
    if (!plan) throw new BadRequestException(`Resource could not created`);
    return plan;
  }

  @CheckPolicies(new UpdatePlanPolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updatePlanDto: UpdatePlanDto
  ): Promise<Plan> {
    const plan = await this.planService.update(id, updatePlanDto);
    if (!plan)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return plan;
  }

  @CheckPolicies(new DeletePlanPolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Plan> {
    const plan = await this.planService.remove(id);
    if (!plan)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return plan;
  }
}
