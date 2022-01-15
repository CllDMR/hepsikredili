import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema({ id: false, _id: false })
export class Profile {
  @Prop({ required: true })
  firstname!: string;

  @Prop({ required: true })
  lastname!: string;

  @Prop({ required: false })
  gender!: string;

  @Prop({ required: false })
  educationLevel!: string;

  @Prop({ required: false })
  job!: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
