import {
  AdDetailSatilikDaire,
  AdDetailSatilikDaireDocument,
} from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateSatilikDaireDto } from '../dtos/create-satilik-daire.dto';
import { QuerySatilikDaireDto } from '../dtos/query-satilik-daire.dto';
import { UpdateSatilikDaireDto } from '../dtos/update-satilik-daire.dto';

@Injectable()
export class SatilikDaireService {
  constructor(
    @InjectModel(AdDetailSatilikDaire.name)
    private readonly adDetailSatilikDaireModel: Model<AdDetailSatilikDaireDocument>
  ) {}

  async findAll(
    _querySatilikDaireDto: QuerySatilikDaireDto
  ): Promise<AdDetailSatilikDaire[]> {
    const filter: FilterQuery<AdDetailSatilikDaireDocument> = {};
    return await this.adDetailSatilikDaireModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<AdDetailSatilikDaire | null> {
    return await this.adDetailSatilikDaireModel.findById(id).exec();
  }

  async create(
    createSatilikDaireDto: CreateSatilikDaireDto
  ): Promise<AdDetailSatilikDaire> {
    const adDetailSatilikDaire = new this.adDetailSatilikDaireModel({
      ...createSatilikDaireDto,
      kind: 'AdDetailSatilikDaire',
    });
    return await adDetailSatilikDaire.save();
  }

  async update(id: string, updateSatilikDaireDto: UpdateSatilikDaireDto) {
    const instructions = $.flatten(updateSatilikDaireDto);

    return await this.adDetailSatilikDaireModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.adDetailSatilikDaireModel
      .findByIdAndRemove(id, { new: true })
      .exec();
  }
}
