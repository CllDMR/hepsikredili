import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserIndividualDocument = UserIndividual & Document;

@Schema()
export class UserIndividual {
  name!: string;
}

export const UserIndividualSchema =
  SchemaFactory.createForClass(UserIndividual);
