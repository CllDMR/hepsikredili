import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AccountBase } from '../account/base.schema';
import { AdDetailSatilikDaire } from '../ad-detail/satilik-daire.schema';
import { Address } from '../address.schema';
import { ImageShrinked } from '../image-shrinked.schema';

export type AdSatilikDaireDocument = AdSatilikDaire & Document;

@Schema({
  timestamps: true,
})
export class AdSatilikDaire {
  kind!: string;
  published!: boolean;
  account!: string | AccountBase;
  no!: string;
  detail!: string | AdDetailSatilikDaire;
  name!: string;
  address!: Address;
  price!: number;
  // payment: PaymentEnum;
  images!: ImageShrinked[];
}

export const AdSatilikDaireSchema =
  SchemaFactory.createForClass(AdSatilikDaire);
