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
import { CreateSatilikDaireDetailDto } from '../dtos/create-satilik-daire-detail.dto';
import { CreateSatilikDaireDto } from '../dtos/create-satilik-daire.dto';
import { QuerySatilikDaireDto } from '../dtos/query-satilik-daire.dto';
import { UpdateSatilikDaireDto } from '../dtos/update-satilik-daire.dto';

@Injectable()
export class SatilikDaireService {
  constructor(
    @InjectModel(AdSatilikDaire.name)
    private readonly adSatilikDaireModel: Model<AdSatilikDaireDocument>,
    @InjectModel(AdDetailSatilikDaire.name)
    private readonly adDetailSatilikDaireModel: Model<AdDetailSatilikDaireDocument>
  ) {}

  async findAll(
    querySatilikDaireDto: QuerySatilikDaireDto
  ): Promise<AdSatilikDaire[]> {
    const { search, name, adLimitGt, adLimitLte, priceGt, priceLte } =
      querySatilikDaireDto;

    const filter: FilterQuery<AdSatilikDaireDocument> = {};

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

  async findOneById(id: string): Promise<AdSatilikDaire | null> {
    return await this.adSatilikDaireModel.findById(id).exec();
  }

  async create(
    createSatilikDaireDto: CreateSatilikDaireDto,
    createSatilikDaireDetailDto: CreateSatilikDaireDetailDto
  ): Promise<{ ad: AdSatilikDaire; adDetail: AdDetailSatilikDaire }> {
    const newAdDetail = new this.adDetailSatilikDaireModel({
      ...createSatilikDaireDetailDto,
      kind: 'AdDetailSatilikDaire',
    });
    const newAd = new this.adSatilikDaireModel({
      ...createSatilikDaireDto,
      kind: 'AdSatilikDaire',
      published: false,
      no: uuidV4(),
      payment: PaymentEnum.NotDefined,
    });

    newAd.detail = newAdDetail.id;
    newAdDetail.ad = newAd.id;

    const ad = await newAd.save();
    const adDetail = await newAdDetail.save();
    return { ad, adDetail };
  }

  async update(id: string, updateSatilikDaireDto: UpdateSatilikDaireDto) {
    const instructions = $.flatten(updateSatilikDaireDto);

    return await this.adSatilikDaireModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.adSatilikDaireModel
      .findByIdAndRemove(id, { new: true })
      .exec();
  }
}
