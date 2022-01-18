import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Account } from './account.schema';
import { UserCorporate } from './user-corporate.schema';
import { UserIndividual } from './user-individual.schema';

export type UserDocument = User & Document;

@Schema({ discriminatorKey: 'kind' })
export class User {
  _id!: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    enum: [UserIndividual.name, UserCorporate.name],
  })
  kind!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  account!: string | Account;

  @Prop({ required: true, default: false })
  emailVerified!: boolean;

  @Prop({ unique: true, required: true })
  email!: string;

  @Prop({ required: true, select: false })
  password!: string;

  // @Prop({ type: ProfileSchema, required: true, select: false })
  // profile!: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);
