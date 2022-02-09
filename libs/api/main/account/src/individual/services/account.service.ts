import {
  AccountIndividual,
  AccountIndividualDocument,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateAccountIndividualDto } from '../dtos/create-account.dto';
import { QueryAccountIndividualDto } from '../dtos/query-account.dto';
import { UpdateAccountIndividualDto } from '../dtos/update-account.dto';

@Injectable()
export class ApiMainAccountIndividualService {
  constructor(
    @InjectModel(AccountIndividual.name)
    private readonly accountIndividualModel: Model<AccountIndividualDocument>
  ) {}

  async findAll(
    _queryAccountIndividualDto: QueryAccountIndividualDto
  ): Promise<AccountIndividual[]> {
    // const { search } = queryAccountDto;

    const filter: FilterQuery<AccountIndividualDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.accountIndividualModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<AccountIndividual | null> {
    return await this.accountIndividualModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<AccountIndividual | null> {
    return await this.accountIndividualModel
      .findOne({ email: email })
      .select('+password')
      .exec();
  }

  async create(
    createAccountIndividualDto: CreateAccountIndividualDto
  ): Promise<AccountIndividual> {
    //TODO: Change Kind
    const accountIndividual = new this.accountIndividualModel({
      ...createAccountIndividualDto,
      kind: AccountIndividual.name,
    });
    return await accountIndividual.save();
  }

  async update(
    id: string,
    updateAccountIndividualDto: UpdateAccountIndividualDto
  ) {
    const instructions = $.flatten(updateAccountIndividualDto);

    return await this.accountIndividualModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.accountIndividualModel
      .findByIdAndRemove(id, { new: true })
      .exec();
  }
}
