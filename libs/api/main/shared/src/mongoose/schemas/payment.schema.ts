import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Account } from './account/account.schema';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  _id!: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  owner!: string | Account;

  @Prop({ required: true })
  price!: number;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
