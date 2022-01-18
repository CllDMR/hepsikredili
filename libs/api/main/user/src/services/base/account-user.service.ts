import {
  UserBase,
  UserBaseDocument,
  UserIndividual,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateUserBaseDto } from '../../dtos/base/create-user.dto';
import { QueryUserBaseDto } from '../../dtos/base/query-user.dto';
import { UpdateUserBaseDto } from '../../dtos/base/update-user.dto';

@Injectable()
export class ApiMainAccountUserBaseService {
  constructor(
    @InjectModel(UserBase.name)
    private readonly userBaseModel: Model<UserBaseDocument>
  ) {}

  async findAll(
    accountId: string,
    queryUserDto: QueryUserBaseDto
  ): Promise<UserBase[]> {
    // const { search } = queryUserDto;

    const filter: FilterQuery<UserBaseDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.userBaseModel
      .find({ ...filter, account: accountId })
      .exec();
  }

  async findOneById(accountId: string, id: string): Promise<UserBase | null> {
    return await this.userBaseModel.findById(id).exec();
  }

  async create(
    accountId: string,
    createUserDto: CreateUserBaseDto
  ): Promise<UserBase> {
    const userBase = new this.userBaseModel({
      ...createUserDto,
      account: accountId,
      kind: UserIndividual.name,
    });
    return await userBase.save();
  }

  async update(
    accountId: string,
    id: string,
    updateUserDto: UpdateUserBaseDto
  ) {
    const instructions = $.flatten(updateUserDto);

    return await this.userBaseModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.userBaseModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
