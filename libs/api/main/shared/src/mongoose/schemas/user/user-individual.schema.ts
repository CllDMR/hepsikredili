import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Account } from './account.schema';

export type UserIndividualDocument = UserIndividual & Document;

@Schema()
export class UserIndividual {
  _id!: Types.ObjectId;
  kind!: string;
  account!: string | Account;
  emailVerified!: boolean;
  email!: string;
  password!: string;
}

export const UserIndividualSchema =
  SchemaFactory.createForClass(UserIndividual);
