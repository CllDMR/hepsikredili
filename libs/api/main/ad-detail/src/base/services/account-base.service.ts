import {
  AdDetailBase,
  AdDetailBaseDocument,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { QueryAccountBaseDto } from '../dtos/query-account-base.dto';
import { UpdateAccountBaseDto } from '../dtos/update-account-base.dto';

@Injectable()
export class AccountBaseService {
  constructor(
    @InjectModel(AdDetailBase.name)
    private readonly adDetailBaseModel: Model<AdDetailBaseDocument>
  ) {}

  async findAll(
    accountId: string,
    _queryAccountBaseDto: QueryAccountBaseDto
  ): Promise<AdDetailBase[]> {
    const filter: FilterQuery<AdDetailBaseDocument> = { account: accountId };
    return await this.adDetailBaseModel.find(filter).exec();
  }

  async findOneById(
    accountId: string,
    id: string
  ): Promise<AdDetailBase | null> {
    return await this.adDetailBaseModel
      .findOne({ _id: id, account: accountId })
      .exec();
  }

  async update(
    accountId: string,
    id: string,
    updateAccountBaseDto: UpdateAccountBaseDto
  ) {
    const instructions = $.flatten(updateAccountBaseDto);

    return await this.adDetailBaseModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.adDetailBaseModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
