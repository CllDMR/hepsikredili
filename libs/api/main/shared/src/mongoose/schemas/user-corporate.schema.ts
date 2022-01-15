import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserCorporateDocument = UserCorporate & Document;

@Schema()
export class UserCorporate {
  name!: string;
}

export const UserCorporateSchema = SchemaFactory.createForClass(UserCorporate);
