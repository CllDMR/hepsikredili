import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Account } from './account.schema';
import { Ad } from './ad.schema';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  _id!: Types.ObjectId;

  @Prop({ required: true })
  cloudinaryId!: string;

  @Prop({ required: true })
  url!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  owner!: Account | string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Ad', required: false })
  ad!: Ad | string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
