import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountIndividualDocument = AccountIndividual & Document;

@Schema()
export class AccountIndividual {
  name!: string;
}

export const AccountIndividualSchema =
  SchemaFactory.createForClass(AccountIndividual);
