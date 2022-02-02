import {
  AdBase,
  AdBaseDocument,
  AdDetailBase,
  AdDetailBaseDocument,
  PaymentEnum,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { v4 as uuidV4 } from 'uuid';
import { CreateAccountBaseDetailDto } from '../dtos/create-account-base-detail.dto';
import { CreateAccountBaseDto } from '../dtos/create-account-base.dto';
import { QueryAccountBaseDto } from '../dtos/query-account-base.dto';
import { UpdateAccountBaseDto } from '../dtos/update-account-base.dto';

@Injectable()
export class AccountBaseService {
  constructor(
    @InjectModel(AdBase.name)
    private readonly adBaseModel: Model<AdBaseDocument>,
    @InjectModel(AdDetailBase.name)
    private readonly adDetailBaseModel: Model<AdDetailBaseDocument>
  ) {}

  async findAll(
    accountId: string,
    queryAccountBaseDto: QueryAccountBaseDto
  ): Promise<AdBase[]> {
    const { search, name, adLimitGt, adLimitLte, priceGt, priceLte } =
      queryAccountBaseDto;

    const filter: FilterQuery<AdBaseDocument> = {
      account: accountId,
    };

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

  async findOneById(accountId: string, id: string): Promise<AdBase | null> {
    return await this.adBaseModel
      .findOne({ _id: id, account: accountId })
      .exec();
  }

  async create(
    accountId: string,
    createAccountBaseDto: CreateAccountBaseDto,
    createAccountBaseDetailDto: CreateAccountBaseDetailDto
  ): Promise<{ ad: AdBase; adDetail: AdDetailBase }> {
    const newAdDetail = new this.adDetailBaseModel({
      ...createAccountBaseDetailDto,
      kind: 'AdDetailBase',
      account: accountId,
    });
    const newAd = new this.adBaseModel({
      ...createAccountBaseDto,
      kind: 'AdBase',
      published: false,
      account: accountId,
      no: uuidV4(),
      payment: PaymentEnum.NotDefined,
    });

    newAd.detail = newAdDetail.id;
    newAdDetail.ad = newAd.id;

    const ad = await newAd.save();
    const adDetail = await newAdDetail.save();
    return { ad, adDetail };
  }

  async update(
    accountId: string,
    id: string,
    updateAccountBaseDto: UpdateAccountBaseDto
  ) {
    const instructions = $.flatten(updateAccountBaseDto);

    return await this.adBaseModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.adBaseModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
