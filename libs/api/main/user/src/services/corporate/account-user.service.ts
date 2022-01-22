import {
  UserCorporate,
  UserCorporateDocument,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateUserCorporateDto } from '../../dtos/corporate/create-user.dto';
import { QueryUserCorporateDto } from '../../dtos/corporate/query-user.dto';
import { UpdateUserCorporateDto } from '../../dtos/corporate/update-user.dto';

@Injectable()
export class ApiMainAccountUserCorporateService {
  constructor(
    @InjectModel(UserCorporate.name)
    private readonly userCorporateModel: Model<UserCorporateDocument>
  ) {}

  async findAll(
    accountId: string,
    _queryUserCorporateDto: QueryUserCorporateDto
  ): Promise<UserCorporate[]> {
    // const { search } = queryUserDto;

    const filter: FilterQuery<UserCorporateDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.userCorporateModel
      .find({ ...filter, account: accountId })
      .exec();
  }

  async findOneById(
    accountId: string,
    id: string
  ): Promise<UserCorporate | null> {
    return await this.userCorporateModel.findById(id).exec();
  }

  async create(
    accountId: string,
    createUserCorporateDto: CreateUserCorporateDto
  ): Promise<UserCorporate> {
    const userCorporate = new this.userCorporateModel({
      ...createUserCorporateDto,
      account: accountId,
      kind: UserCorporate.name,
    });
    return await userCorporate.save();
  }

  async update(
    accountId: string,
    id: string,
    updateUserCorporateDto: UpdateUserCorporateDto
  ) {
    const instructions = $.flatten(updateUserCorporateDto);

    return await this.userCorporateModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.userCorporateModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
