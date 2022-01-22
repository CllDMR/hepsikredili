import {
  AccountCorporate,
  AccountCorporateDocument,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateAccountCorporateDto } from '../../dtos/corporate/create-account.dto';
import { QueryAccountCorporateDto } from '../../dtos/corporate/query-account.dto';
import { UpdateAccountCorporateDto } from '../../dtos/corporate/update-account.dto';

@Injectable()
export class ApiMainAccountCorporateService {
  constructor(
    @InjectModel(AccountCorporate.name)
    private readonly accountCorporateModel: Model<AccountCorporateDocument>
  ) {}

  async findAll(
    _queryAccountCorporateDto: QueryAccountCorporateDto
  ): Promise<AccountCorporate[]> {
    // const { search } = queryAccountDto;

    const filter: FilterQuery<AccountCorporateDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.accountCorporateModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<AccountCorporate | null> {
    return await this.accountCorporateModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<AccountCorporate | null> {
    return await this.accountCorporateModel
      .findOne({ email: email })
      .select('+password')
      .exec();
  }

  async create(
    createAccountCorporateDto: CreateAccountCorporateDto
  ): Promise<AccountCorporate> {
    //TODO: Change Kind
    const accountCorporate = new this.accountCorporateModel({
      ...createAccountCorporateDto,
      kind: AccountCorporate.name,
    });
    return await accountCorporate.save();
  }

  async update(
    id: string,
    updateAccountCorporateDto: UpdateAccountCorporateDto
  ) {
    const instructions = $.flatten(updateAccountCorporateDto);

    return await this.accountCorporateModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.accountCorporateModel
      .findByIdAndRemove(id, { new: true })
      .exec();
  }
}
