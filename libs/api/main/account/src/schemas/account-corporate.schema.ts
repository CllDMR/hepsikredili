import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountCorporateDocument = AccountCorporate & Document;

@Schema()
export class AccountCorporate {
  name!: string;
}

export const AccountCorporateSchema =
  SchemaFactory.createForClass(AccountCorporate);
