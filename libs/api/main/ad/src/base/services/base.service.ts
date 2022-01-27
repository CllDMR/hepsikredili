import { AdBase, AdBaseDocument } from '@hepsikredili/api/main/shared';
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
    @InjectModel(AdBase.name)
    private readonly adBaseModel: Model<AdBaseDocument>
  ) {}

  async findAll(queryBaseDto: QueryBaseDto): Promise<AdBase[]> {
    const { search, name, adLimitGt, adLimitLte, priceGt, priceLte } =
      queryBaseDto;

    const filter: FilterQuery<AdBaseDocument> = {};

    if (name) filter.name = name;
    if (adLimitGt || adLimitLte) {
      filter.adLimit = {};
      if (adLimitGt) filter.adLimit.$gt = adLimitGt;
      if (adLimitLte) filter.adLimit.$lte = adLimitLte;
    }
    if (priceGt || priceLte) {
      filter.price = {};
      if (priceGt) filter.price.$gt = priceGt;
      if (priceLte) filter.price.$lte = priceLte;
    }
    if (search) filter.$text = { $search: search?.trim() };

    return await this.adBaseModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<AdBase | null> {
    return await this.adBaseModel.findById(id).exec();
  }

  async create(createBaseDto: CreateBaseDto): Promise<AdBase> {
    const adBase = new this.adBaseModel(createBaseDto);
    return await adBase.save();
  }

  async update(id: string, updateBaseDto: UpdateBaseDto) {
    const instructions = $.flatten(updateBaseDto);

    return await this.adBaseModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.adBaseModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
