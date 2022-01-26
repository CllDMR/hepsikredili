import { Image, ImageDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateImageDto } from '../dtos/create-image.dto';
import { QueryImageDto } from '../dtos/query-image.dto';
import { UpdateImageDto } from '../dtos/update-image.dto';

@Injectable()
export class ApiMainImageService {
  constructor(
    @InjectModel(Image.name)
    private readonly imageModel: Model<ImageDocument>
  ) {}

  async findAll(queryImageDto: QueryImageDto): Promise<Image[]> {
    const { search, name, adLimitGt, adLimitLte, priceGt, priceLte } =
      queryImageDto;

    const filter: FilterQuery<ImageDocument> = {};

    if (name) filter.name = name;
    if (adLimitGt || adLimitLte) {
      filter.adLimit = {};
      if (adLimitGt) filter.adLimit.$gt = adLimitGt;
      if (adLimitLte) filter.adLimit.$lte = adLimitLte;
    }
    if (priceGt || priceLte) {
      filter.price = {};
      if (priceGt) filter.price.$gt = priceGt;
      if (priceLte) filter.price.$lte = priceLte;
    }
    if (search) filter.$text = { $search: search?.trim() };

    return await this.imageModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<Image | null> {
    return await this.imageModel.findById(id).exec();
  }

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const image = new this.imageModel(createImageDto);
    return await image.save();
  }

  async update(id: string, updateImageDto: UpdateImageDto) {
    const instructions = $.flatten(updateImageDto);

    return await this.imageModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.imageModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
