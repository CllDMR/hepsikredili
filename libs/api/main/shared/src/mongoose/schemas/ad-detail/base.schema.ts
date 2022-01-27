import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { AdBase } from '../ad/base.schema';

export type AdDetailBaseDocument = AdDetailBase & Document;

@Schema()
export class AdDetailBase {
  _id!: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    enum: ['SatılıkDaire', 'SatılıkResidence'],
  })
  kind!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Ad', required: true })
  ad!: string | AdBase;

  @Prop({ required: true })
  description!: string;
}

export const AdDetailBaseSchema = SchemaFactory.createForClass(AdDetailBase);
