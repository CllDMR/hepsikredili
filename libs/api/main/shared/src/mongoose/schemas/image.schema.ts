import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { AccountBase } from './account/account-base.schema';
import { AdBase } from './ad/base.schema';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  _id!: Types.ObjectId;

  @Prop({ required: true })
  cloudinaryId!: string;

  @Prop({ required: true })
  url!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  owner!: AccountBase | string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Ad', required: false })
  ad!: AdBase | string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
