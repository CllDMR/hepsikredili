import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InvoiceDocument = Invoice & Document;

@Schema()
export class Invoice {
  _id!: Types.ObjectId;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
