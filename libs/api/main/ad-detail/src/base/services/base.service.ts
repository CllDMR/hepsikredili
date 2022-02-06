import {
  AdDetailBase,
  AdDetailBaseDocument,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateBaseDto } from '../dtos/create-base.dto';
import { QueryBaseDto } from '../dtos/query-base.dto';
import { UpdateBaseDto } from '../dtos/update-base.dto';

@Injectable()
export class BaseService {
  constructor(
    @InjectModel(AdDetailBase.name)
    private readonly adDetailBaseModel: Model<AdDetailBaseDocument>
  ) {}

  async findAll(_queryBaseDto: QueryBaseDto): Promise<AdDetailBase[]> {
    const filter: FilterQuery<AdDetailBaseDocument> = {};
    return await this.adDetailBaseModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<AdDetailBase | null> {
    return await this.adDetailBaseModel.findById(id).exec();
  }

  async create(createBaseDto: CreateBaseDto): Promise<AdDetailBase> {
    const adDetailBase = new this.adDetailBaseModel({
      ...createBaseDto,
      kind: 'AdDetailBase',
    });
    return await adDetailBase.save();
  }

  async update(id: string, updateBaseDto: UpdateBaseDto) {
    const instructions = $.flatten(updateBaseDto);

    return await this.adDetailBaseModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.adDetailBaseModel
      .findByIdAndRemove(id, { new: true })
      .exec();
  }
}
