import {
  User,
  UserDocument,
  UserIndividual,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';
import { QueryUserDto } from '../dtos/query-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class ApiMainAccountUserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}

  async findAll(
    accountId: string,
    queryUserDto: QueryUserDto
  ): Promise<User[]> {
    // const { search } = queryUserDto;

    const filter: FilterQuery<UserDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.userModel.find({ ...filter, account: accountId }).exec();
  }

  async findOneById(accountId: string, id: string): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }

  async create(accountId: string, createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel({
      ...createUserDto,
      account: accountId,
      kind: UserIndividual.name,
    });
    return await user.save();
  }

  async update(accountId: string, id: string, updateUserDto: UpdateUserDto) {
    const instructions = $.flatten(updateUserDto);

    return await this.userModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.userModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
