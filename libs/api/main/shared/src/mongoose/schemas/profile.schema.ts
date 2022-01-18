import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema({ id: false, _id: false })
export class Profile {
  _id!: Types.ObjectId;

  @Prop({ required: true })
  firstname!: string;

  @Prop({ required: true })
  lastname!: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
