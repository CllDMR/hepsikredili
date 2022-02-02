import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { AccountBase } from '../account/base.schema';
import { AdBase } from '../ad/base.schema';

export type AdDetailBaseDocument = AdDetailBase & Document;

@Schema({
  timestamps: true,
  discriminatorKey: 'kind',
})
export class AdDetailBase {
  _id!: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    enum: ['AdDetailBase', 'AdDetailSatilikDaire'],
  })
  kind!: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'AccountBase',
    required: true,
  })
  account!: string | AccountBase;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'AdBase', required: true })
  ad!: string | AdBase;

  @Prop({ required: true })
  description!: string;
}

export const AdDetailBaseSchema = SchemaFactory.createForClass(AdDetailBase);
