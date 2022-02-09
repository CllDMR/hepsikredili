import {
  AccountBase,
  AccountBaseDocument,
  AccountIndividual,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateAccountBaseDto } from '../dtos/create-account.dto';
import { QueryAccountBaseDto } from '../dtos/query-account.dto';
import { UpdateAccountBaseDto } from '../dtos/update-account.dto';

@Injectable()
export class ApiMainAccountBaseService {
  constructor(
    @InjectModel(AccountBase.name)
    private readonly accountBaseModel: Model<AccountBaseDocument>
  ) {}

  async findAll(
    _queryAccountBaseDto: QueryAccountBaseDto
  ): Promise<AccountBase[]> {
    // const { search } = queryAccountDto;

    const filter: FilterQuery<AccountBaseDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.accountBaseModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<AccountBase | null> {
    return await this.accountBaseModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<AccountBase | null> {
    return await this.accountBaseModel
      .findOne({ email: email })
      .select('+password')
      .exec();
  }

  async create(
    createAccountBaseDto: CreateAccountBaseDto
  ): Promise<AccountBase> {
    //TODO: Change Kind
    const accountBase = new this.accountBaseModel({
      ...createAccountBaseDto,
      kind: AccountIndividual.name,
    });
    return await accountBase.save();
  }

  async update(id: string, updateAccountBaseDto: UpdateAccountBaseDto) {
    const instructions = $.flatten(updateAccountBaseDto);

    return await this.accountBaseModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.accountBaseModel
      .findByIdAndRemove(id, { new: true })
      .exec();
  }
}
