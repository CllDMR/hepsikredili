import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from '../user/user-base.schema';
import { AccountCorporate } from './corporate.schema';
import { AccountIndividual } from './individual.schema';

export type AccountBaseDocument = AccountBase & Document;

@Schema({ discriminatorKey: 'kind' })
export class AccountBase {
  _id!: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    enum: [AccountIndividual.name, AccountCorporate.name],
  })
  kind!: string;

  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: 'User',
    required: true,
  })
  users!: [string] | [User];

  @Prop({ required: true, default: false })
  emailVerified!: boolean;

  @Prop({ unique: true, required: true })
  email!: string;

  @Prop({ required: true })
  name!: string;
}

export const AccountSchema = SchemaFactory.createForClass(AccountBase);
