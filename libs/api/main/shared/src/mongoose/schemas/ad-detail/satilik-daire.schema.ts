import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AdSatilikDaire } from '../ad/satilik-daire.schema';

export type AdDetailSatilikDaireDocument = AdDetailSatilikDaire & Document;

@Schema()
export class AdDetailSatilikDaire {
  _id!: Types.ObjectId;
  kind!: string;
  ad!: string | AdSatilikDaire;
  description!: string;
}

export const AdDetailSatilikDaireSchema =
  SchemaFactory.createForClass(AdDetailSatilikDaire);
