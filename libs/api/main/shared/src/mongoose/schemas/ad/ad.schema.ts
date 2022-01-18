import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { AccountBase } from '../account/account-base.schema';
import { AdDetail } from '../ad-detail/ad-detail.schema';
import { Address, AddressSchema } from '../address.schema';
import { ImageShrinked, ImageShrinkedSchema } from '../image-shrinked.schema';

export type AdDocument = Ad & Document;

@Schema({
  timestamps: true,
})
export class Ad {
  @Prop({
    type: String,
    required: true,
    enum: ['SatılıkDaire', 'SatılıkResidence'],
  })
  kind!: string;

  @Prop({
    required: true,
    default: false,
  })
  published!: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  owner!: string | AccountBase;

  @Prop({ required: true })
  no!: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'AdDetail',
    required: true,
  })
  detail!: string | AdDetail;

  @Prop({ required: true })
  name!: string;

  @Prop({
    type: AddressSchema,
    required: true,
  })
  address!: Address;

  @Prop({ required: true })
  price!: number;

  // @Prop({ required: true, type: Number, enum: Object.values(PaymentEnum) })
  // payment: PaymentEnum;

  @Prop({ type: [ImageShrinkedSchema], required: true })
  images!: ImageShrinked[];
}

export const AdSchema = SchemaFactory.createForClass(Ad);
