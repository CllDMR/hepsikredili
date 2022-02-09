import { Plan, PlanDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreatePlanDto } from '../dtos/create-plan.dto';
import { QueryPlanDto } from '../dtos/query-plan.dto';
import { UpdatePlanDto } from '../dtos/update-plan.dto';

@Injectable()
export class ApiMainPlanService {
  constructor(
    @InjectModel(Plan.name)
    private readonly planModel: Model<PlanDocument>
  ) {}

  async findAll(queryPlanDto: QueryPlanDto): Promise<Plan[]> {
    const filter: FilterQuery<PlanDocument> = {};
    return await this.planModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<Plan | null> {
    return await this.planModel.findById(id).exec();
  }

  async create(createPlanDto: CreatePlanDto): Promise<Plan> {
    const plan = new this.planModel(createPlanDto);
    return await plan.save();
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    const instructions = $.flatten(updatePlanDto);

    return await this.planModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.planModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
