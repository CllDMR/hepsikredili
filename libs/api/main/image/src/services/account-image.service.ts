import { Image, ImageDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountImageDto } from '../dtos/create-account-image.dto';

@Injectable()
export class ApiMainAccountImageService {
  constructor(
    @InjectModel(Image.name)
    private readonly imageModel: Model<ImageDocument>
  ) {}

  async create(createAccountImageDto: CreateAccountImageDto) {
    const newImage = new this.imageModel(createAccountImageDto);
    return newImage.save();
  }

  async findAll(accountId: string) {
    return await this.imageModel.find({ owner: accountId }).exec();
  }

  async findOneById(id: string) {
    return await this.imageModel.findById(id).exec();
  }

  async remove(id: string) {
    return await this.imageModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
