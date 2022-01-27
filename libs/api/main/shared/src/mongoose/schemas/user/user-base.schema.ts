import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { AccountBase } from '../account/account-base.schema';

export type UserDocument = User & Document;

@Schema({ discriminatorKey: 'kind' })
export class User {
  _id!: Types.ObjectId;

  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: 'AccountBase',
    required: true,
  })
  accounts!: string[] | AccountBase[];

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

export const UserSchema = SchemaFactory.createForClass(User);
