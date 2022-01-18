import {
  UserIndividual,
  UserIndividualDocument,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateUserIndividualDto } from '../../dtos/individual/create-user.dto';
import { QueryUserIndividualDto } from '../../dtos/individual/query-user.dto';
import { UpdateUserIndividualDto } from '../../dtos/individual/update-user.dto';

@Injectable()
export class ApiMainAccountUserIndividualService {
  constructor(
    @InjectModel(UserIndividual.name)
    private readonly userIndividualModel: Model<UserIndividualDocument>
  ) {}

  async findAll(
    accountId: string,
    queryUserIndividualDto: QueryUserIndividualDto
  ): Promise<UserIndividual[]> {
    // const { search } = queryUserDto;

    const filter: FilterQuery<UserIndividualDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.userIndividualModel
      .find({ ...filter, account: accountId })
      .exec();
  }

  async findOneById(
    accountId: string,
    id: string
  ): Promise<UserIndividual | null> {
    return await this.userIndividualModel.findById(id).exec();
  }

  async create(
    accountId: string,
    createUserIndividualDto: CreateUserIndividualDto
  ): Promise<UserIndividual> {
    const userIndividual = new this.userIndividualModel({
      ...createUserIndividualDto,
      account: accountId,
      kind: UserIndividual.name,
    });
    return await userIndividual.save();
  }

  async update(
    accountId: string,
    id: string,
    updateUserIndividualDto: UpdateUserIndividualDto
  ) {
    const instructions = $.flatten(updateUserIndividualDto);

    return await this.userIndividualModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.userIndividualModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
