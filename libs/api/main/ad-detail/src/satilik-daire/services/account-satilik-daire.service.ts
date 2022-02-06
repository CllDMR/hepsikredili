import {
  AdDetailSatilikDaire,
  AdDetailSatilikDaireDocument,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { QuerySatilikDaireDto } from '../dtos/query-satilik-daire.dto';
import { UpdateSatilikDaireDto } from '../dtos/update-satilik-daire.dto';

@Injectable()
export class AccountSatilikDaireService {
  constructor(
    @InjectModel(AdDetailSatilikDaire.name)
    private readonly adDetailSatilikDaireModel: Model<AdDetailSatilikDaireDocument>
  ) {}

  async findAll(
    accountId: string,
    _querySatilikDaireDto: QuerySatilikDaireDto
  ): Promise<AdDetailSatilikDaire[]> {
    const filter: FilterQuery<AdDetailSatilikDaireDocument> = {
      account: accountId,
    };
    return await this.adDetailSatilikDaireModel.find(filter).exec();
  }

  async findOneById(
    accountId: string,
    id: string
  ): Promise<AdDetailSatilikDaire | null> {
    return await this.adDetailSatilikDaireModel
      .findOne({ _id: id, account: accountId })
      .exec();
  }

  async update(
    accountId: string,
    id: string,
    updateSatilikDaireDto: UpdateSatilikDaireDto
  ) {
    const instructions = $.flatten(updateSatilikDaireDto);

    return await this.adDetailSatilikDaireModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.adDetailSatilikDaireModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
