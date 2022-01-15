import { Plan, PlanDocument } from '@hepsikredili/api/main/shared';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { Model } from 'mongoose';
import { CreatePlanDto } from '../dtos/create-plan.dto';
import { QueryPlanDto } from '../dtos/query-plan.dto';
import { UpdatePlanDto } from '../dtos/update-plan.dto';

@Injectable()
export class PlanService {
  constructor(
    @InjectModel(Plan.name)
    private readonly planModel: Model<PlanDocument>
  ) {}

  async findAll(queryPlanDto: QueryPlanDto): Promise<Plan[]> {
    return await this.planModel.find(queryPlanDto).exec();
  }

  async findOneById(id: string): Promise<Plan | null> {
    return await this.planModel.findById(id).exec();
  }

  async create(createPlanDto: CreatePlanDto): Promise<Plan> {
    const plan = new this.planModel(createPlanDto);
    if (!plan) throw new BadRequestException('Something went wrong');
    const newPlan = await plan.save();
    if (!newPlan) throw new BadRequestException('Something went wrong');
    return newPlan;
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    const instructions = $.flatten(updatePlanDto);

    const plan = await this.planModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
    if (!plan)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return plan;
  }
}
