import { Ad, AdDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateAdDto } from '../dtos/create-ad.dto';
import { QueryAdDto } from '../dtos/query-ad.dto';
import { UpdateAdDto } from '../dtos/update-ad.dto';

@Injectable()
export class ApiMainAdService {
  constructor(
    @InjectModel(Ad.name)
    private readonly adModel: Model<AdDocument>
  ) {}

  async findAll(queryAdDto: QueryAdDto): Promise<Ad[]> {
    const { search, name, adLimitGt, adLimitLte, priceGt, priceLte } =
      queryAdDto;

    const filter: FilterQuery<AdDocument> = {};

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

    return await this.adModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<Ad | null> {
    return await this.adModel.findById(id).exec();
  }

  async create(createAdDto: CreateAdDto): Promise<Ad> {
    const ad = new this.adModel(createAdDto);
    return await ad.save();
  }

  async update(id: string, updateAdDto: UpdateAdDto) {
    const instructions = $.flatten(updateAdDto);

    return await this.adModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.adModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
