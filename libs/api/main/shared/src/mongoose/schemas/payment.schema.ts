import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { AccountBase } from './account/account-base.schema';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  _id!: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'AccountBase',
    required: true,
  })
  owner!: string | AccountBase;

  @Prop({ required: true })
  price!: number;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
