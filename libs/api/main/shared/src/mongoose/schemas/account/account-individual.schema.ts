import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AccountIndividualDocument = AccountIndividual & Document;

@Schema()
export class AccountIndividual {
  _id!: Types.ObjectId;
  name!: string;
}

export const AccountIndividualSchema =
  SchemaFactory.createForClass(AccountIndividual);
