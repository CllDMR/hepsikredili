import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ImageShrinkedDocument = ImageShrinked & Document;

@Schema()
export class ImageShrinked {
  _id!: Types.ObjectId;

  @Prop({ required: true })
  url!: string;
}

export const ImageShrinkedSchema = SchemaFactory.createForClass(ImageShrinked);
