import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { AccountBase } from './account/account-base.schema';

export type InvoiceDocument = Invoice & Document;

@Schema()
export class Invoice {
  _id!: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'AccountBase',
    required: true,
  })
  owner!: AccountBase | string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
