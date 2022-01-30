import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AccountCorporateDocument = AccountCorporate & Document;

@Schema()
export class AccountCorporate {
  _id!: Types.ObjectId;
  emailVerified!: boolean;
  email!: string;
  name!: string;
}

export const AccountCorporateSchema =
  SchemaFactory.createForClass(AccountCorporate);
