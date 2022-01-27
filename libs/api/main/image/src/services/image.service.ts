import { Image, ImageDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ApiMainImageService {
  constructor(
    @InjectModel(Image.name)
    private readonly imageModel: Model<ImageDocument>
  ) {}

  async findOneById(id: string): Promise<Image | null> {
    return await this.imageModel.findById(id).exec();
  }
}
