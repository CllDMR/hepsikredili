import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AccountBase } from '../account/account-base.schema';

export type UserCorporateDocument = UserCorporate & Document;

@Schema()
export class UserCorporate {
  _id!: Types.ObjectId;
  kind!: string;
  account!: string | AccountBase;
  emailVerified!: boolean;
  email!: string;
  password!: string;
}

export const UserCorporateSchema = SchemaFactory.createForClass(UserCorporate);
