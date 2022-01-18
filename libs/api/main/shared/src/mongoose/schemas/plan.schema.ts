import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PlanDocument = Plan & Document;

@Schema()
export class Plan {
  _id!: Types.ObjectId;

  @Prop({ required: true, index: 'text' })
  name!: string;

  @Prop({ required: true })
  price!: number;

  @Prop({ required: true })
  adLimit!: number;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
