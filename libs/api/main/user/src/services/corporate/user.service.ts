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
export class ApiMainUserCorporateService {
  constructor(
    @InjectModel(UserCorporate.name)
    private readonly userCorporateModel: Model<UserCorporateDocument>
  ) {}

  async findAll(
    _queryUserCorporateDto: QueryUserCorporateDto
  ): Promise<UserCorporate[]> {
    // const { search } = queryUserDto;

    const filter: FilterQuery<UserCorporateDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.userCorporateModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<UserCorporate | null> {
    return await this.userCorporateModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<UserCorporate | null> {
    return await this.userCorporateModel
      .findOne({ email: email })
      .select('+password')
      .exec();
  }

  async create(
    createUserCorporateDto: CreateUserCorporateDto
  ): Promise<UserCorporate> {
    //TODO: Change Kind
    const userCorporate = new this.userCorporateModel({
      ...createUserCorporateDto,
      kind: UserCorporate.name,
    });
    return await userCorporate.save();
  }

  async update(id: string, updateUserCorporateDto: UpdateUserCorporateDto) {
    const instructions = $.flatten(updateUserCorporateDto);

    return await this.userCorporateModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.userCorporateModel
      .findByIdAndRemove(id, { new: true })
      .exec();
  }
}
