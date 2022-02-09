import {
  AdDetailSatilikDaire,
  AdDetailSatilikDaireDocument,
  AdSatilikDaire,
  AdSatilikDaireDocument,
  PaymentEnum,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { v4 as uuidV4 } from 'uuid';
import { CreateAccountSatilikDaireDetailDto } from '../dtos/create-account-satilik-daire-detail.dto';
import { CreateAccountSatilikDaireDto } from '../dtos/create-account-satilik-daire.dto';
import { QueryAccountSatilikDaireDto } from '../dtos/query-account-satilik-daire.dto';
import { UpdateAccountSatilikDaireDto } from '../dtos/update-account-satilik-daire.dto';

@Injectable()
export class AccountSatilikDaireService {
  constructor(
    @InjectModel(AdSatilikDaire.name)
    private readonly adSatilikDaireModel: Model<AdSatilikDaireDocument>,
    @InjectModel(AdDetailSatilikDaire.name)
    private readonly adDetailSatilikDaireModel: Model<AdDetailSatilikDaireDocument>
  ) {}

  async findAll(
    accountId: string,
    queryAccountSatilikDaireDto: QueryAccountSatilikDaireDto
  ): Promise<AdSatilikDaire[]> {
    const { search, name, adLimitGt, adLimitLte, priceGt, priceLte } =
      queryAccountSatilikDaireDto;

    const filter: FilterQuery<AdSatilikDaireDocument> = {
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

    return await this.adSatilikDaireModel.find(filter).exec();
  }

  async findOneById(
    accountId: string,
    id: string
  ): Promise<AdSatilikDaire | null> {
    return await this.adSatilikDaireModel
      .findOne({ _id: id, account: accountId })
      .exec();
  }

  async create(
    accountId: string,
    createAccountSatilikDaireDto: CreateAccountSatilikDaireDto,
    createAccountSatilikDaireDetailDto: CreateAccountSatilikDaireDetailDto
  ): Promise<{ ad: AdSatilikDaire; adDetail: AdDetailSatilikDaire }> {
    const newAdDetail = new this.adDetailSatilikDaireModel({
      ...createAccountSatilikDaireDetailDto,
      kind: 'AdDetailSatilikDaire',
      account: accountId,
    });
    const newAd = new this.adSatilikDaireModel({
      ...createAccountSatilikDaireDto,
      kind: 'AdSatilikDaire',
      published: false,
      account: accountId,
      no: uuidV4(),
      payment: PaymentEnum.Satılık,
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
    updateAccountSatilikDaireDto: UpdateAccountSatilikDaireDto
  ) {
    const instructions = $.flatten(updateAccountSatilikDaireDto);

    return await this.adSatilikDaireModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.adSatilikDaireModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
