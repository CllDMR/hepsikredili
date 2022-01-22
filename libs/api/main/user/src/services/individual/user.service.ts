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
export class ApiMainUserIndividualService {
  constructor(
    @InjectModel(UserIndividual.name)
    private readonly userIndividualModel: Model<UserIndividualDocument>
  ) {}

  async findAll(
    _queryUserIndividualDto: QueryUserIndividualDto
  ): Promise<UserIndividual[]> {
    // const { search } = queryUserDto;

    const filter: FilterQuery<UserIndividualDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.userIndividualModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<UserIndividual | null> {
    return await this.userIndividualModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<UserIndividual | null> {
    return await this.userIndividualModel
      .findOne({ email: email })
      .select('+password')
      .exec();
  }

  async create(
    createUserIndividualDto: CreateUserIndividualDto
  ): Promise<UserIndividual> {
    //TODO: Change Kind
    const userIndividual = new this.userIndividualModel({
      ...createUserIndividualDto,
      kind: UserIndividual.name,
    });
    return await userIndividual.save();
  }

  async update(id: string, updateUserIndividualDto: UpdateUserIndividualDto) {
    const instructions = $.flatten(updateUserIndividualDto);

    return await this.userIndividualModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.userIndividualModel
      .findByIdAndRemove(id, { new: true })
      .exec();
  }
}
