import { Plan } from '@hepsikredili/api/main/shared';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { CreatePlanDto } from '../dtos/create-plan.dto';
import { QueryPlanDto } from '../dtos/query-plan.dto';
import { UpdatePlanDto } from '../dtos/update-plan.dto';
import { PlanService } from '../services/plan.service';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  async readAll(@Query() queryPlanDto: QueryPlanDto): Promise<Plan[]> {
    return await this.planService.findAll(queryPlanDto);
  }

  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<Plan> {
    const plan = await this.planService.findOneById(id);
    if (!plan)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return plan;
  }

  @Post()
  async create(@Body() createPlanDto: CreatePlanDto): Promise<Plan> {
    const plan = await this.planService.create(createPlanDto);
    if (!plan) throw new BadRequestException(`Resource could not created`);
    return plan;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlanDto: UpdatePlanDto
  ): Promise<Plan> {
    const plan = await this.planService.update(id, updatePlanDto);
    if (!plan) throw new BadRequestException(`Resource could not updated with id: ${id}`);
    return plan;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Plan> {
    const plan = await this.planService.remove(id);
    if (!plan) throw new BadRequestException(`Resource could not deleted with id: ${id}`);
    return plan;
  }
}
