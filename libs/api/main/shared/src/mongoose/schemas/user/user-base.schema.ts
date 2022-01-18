import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { AccountBase } from '../account/account-base.schema';
import { UserCorporate } from './user-corporate.schema';
import { UserIndividual } from './user-individual.schema';

export type UserBaseDocument = UserBase & Document;

@Schema({ discriminatorKey: 'kind' })
export class UserBase {
  _id!: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    enum: [UserIndividual.name, UserCorporate.name],
  })
  kind!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  account!: string | AccountBase;

  @Prop({ required: true, default: false })
  emailVerified!: boolean;

  @Prop({ unique: true, required: true })
  email!: string;

  @Prop({ required: true, select: false })
  password!: string;

  //TODO: Add Profile into schema, service and controller
  // @Prop({ type: ProfileSchema, required: true, select: false })
  // profile!: Profile;
}

export const UserBaseSchema = SchemaFactory.createForClass(UserBase);
