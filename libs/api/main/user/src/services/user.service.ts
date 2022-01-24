import { User, UserDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';
import { QueryUserDto } from '../dtos/query-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class ApiMainUserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}

  async findAll(_queryUserDto: QueryUserDto): Promise<User[]> {
    // const { search } = queryUserDto;

    const filter: FilterQuery<UserDocument> = {};
    // if (search) filter.$text = { $search: search?.trim() };

    return await this.userModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.userModel
      .findOne({ email: email })
      .select('+password')
      .exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;

    //TODO: Change Kind
    const user = new this.userModel({
      accounts: [createUserDto.account],
      emailVerified: false,
      email: createUserDto.email,
      password: createUserDto.password,
    });
    return await user.save();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const instructions = $.flatten(updateUserDto);

    return await this.userModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
