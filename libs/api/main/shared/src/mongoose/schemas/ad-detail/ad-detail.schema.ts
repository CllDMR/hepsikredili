import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Ad } from '../ad/ad.schema';

export type AdDetailDocument = AdDetail & Document;

@Schema()
export class AdDetail {
  _id!: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    enum: ['SatılıkDaire', 'SatılıkResidence'],
  })
  kind!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Ad', required: true })
  ad!: string | Ad;

  @Prop({ required: true })
  description!: string;
}

export const AdDetailSchema = SchemaFactory.createForClass(AdDetail);
