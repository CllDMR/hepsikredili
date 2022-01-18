import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AccountCorporate } from './account-corporate.schema';
import { AccountIndividual } from './account-individual.schema';

export type AccountDocument = Account & Document;

@Schema({ discriminatorKey: 'kind' })
export class Account {
  _id!: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    enum: [AccountIndividual.name, AccountCorporate.name],
  })
  kind!: string;

  @Prop({ required: true, default: false })
  emailVerified!: boolean;

  @Prop({ unique: true, required: true })
  email!: string;

  @Prop({ required: true })
  name!: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
