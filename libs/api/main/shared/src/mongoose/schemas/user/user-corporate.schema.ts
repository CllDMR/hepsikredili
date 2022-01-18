import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Account } from '../account/account.schema';

export type UserCorporateDocument = UserCorporate & Document;

@Schema()
export class UserCorporate {
  _id!: Types.ObjectId;
  kind!: string;
  account!: string | Account;
  emailVerified!: boolean;
  email!: string;
  password!: string;
}

export const UserCorporateSchema = SchemaFactory.createForClass(UserCorporate);
