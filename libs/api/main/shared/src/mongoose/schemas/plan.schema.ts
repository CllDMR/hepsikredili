import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { AccountBase } from './account/base.schema';

export type PlanDocument = Plan & Document;

@Schema()
export class Plan {
  _id!: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'AccountBase',
    required: true,
  })
  account!: string | AccountBase;

  @Prop({ required: true, index: 'text' })
  name!: string;

  @Prop({ required: true })
  price!: number;

  @Prop({ required: true })
  adLimit!: number;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
