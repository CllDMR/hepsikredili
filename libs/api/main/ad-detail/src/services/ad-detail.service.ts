import { AdDetail, AdDetailDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateAdDetailDto } from '../dtos/create-ad-detail.dto';
import { QueryAdDetailDto } from '../dtos/query-ad-detail.dto';
import { UpdateAdDetailDto } from '../dtos/update-ad-detail.dto';

@Injectable()
export class ApiMainAdDetailService {
  constructor(
    @InjectModel(AdDetail.name)
    private readonly adDetailModel: Model<AdDetailDocument>
  ) {}

  async findAll(queryAdDetailDto: QueryAdDetailDto): Promise<AdDetail[]> {
    const { search, name, adLimitGt, adLimitLte, priceGt, priceLte } =
      queryAdDetailDto;

    const filter: FilterQuery<AdDetailDocument> = {};

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

    return await this.adDetailModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<AdDetail | null> {
    return await this.adDetailModel.findById(id).exec();
  }

  async create(createAdDetailDto: CreateAdDetailDto): Promise<AdDetail> {
    const adDetail = new this.adDetailModel(createAdDetailDto);
    return await adDetail.save();
  }

  async update(id: string, updateAdDetailDto: UpdateAdDetailDto) {
    const instructions = $.flatten(updateAdDetailDto);

    return await this.adDetailModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.adDetailModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
