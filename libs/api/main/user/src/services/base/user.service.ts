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
export class ApiMainUserBaseService {
  constructor(
    @InjectModel(UserBase.name)
    private readonly userBaseModel: Model<UserBaseDocument>
  ) {}

  async findAll(_queryUserBaseDto: QueryUserBaseDto): Promise<UserBase[]> {
    // const { search } = queryUserDto;

    const filter: FilterQuery<UserBaseDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.userBaseModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<UserBase | null> {
    return await this.userBaseModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<UserBase | null> {
    return await this.userBaseModel
      .findOne({ email: email })
      .select('+password')
      .exec();
  }

  async create(createUserBaseDto: CreateUserBaseDto): Promise<UserBase> {
    //TODO: Change Kind
    const userBase = new this.userBaseModel({
      ...createUserBaseDto,
      kind: UserIndividual.name,
    });
    return await userBase.save();
  }

  async update(id: string, updateUserBaseDto: UpdateUserBaseDto) {
    const instructions = $.flatten(updateUserBaseDto);

    return await this.userBaseModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.userBaseModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
