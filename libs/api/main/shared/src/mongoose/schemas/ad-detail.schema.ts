import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdDetailDocument = AdDetail & Document;

@Schema()
export class AdDetail {
  @Prop({ required: true })
  name!: string;
}

export const AdDetailSchema = SchemaFactory.createForClass(AdDetail);
