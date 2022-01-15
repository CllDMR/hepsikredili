import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdDocument = Ad & Document;

@Schema()
export class Ad {
  @Prop({ required: true })
  name!: string;
}

export const AdSchema = SchemaFactory.createForClass(Ad);
