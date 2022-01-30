import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AccountBase } from '../account/base.schema';
import { AdSatilikDaire } from '../ad/satilik-daire.schema';

export type AdDetailSatilikDaireDocument = AdDetailSatilikDaire & Document;

@Schema()
export class AdDetailSatilikDaire {
  _id!: Types.ObjectId;
  kind!: string;
  account!: string | AccountBase;
  ad!: string | AdSatilikDaire;
  description!: string;
}

export const AdDetailSatilikDaireSchema =
  SchemaFactory.createForClass(AdDetailSatilikDaire);
