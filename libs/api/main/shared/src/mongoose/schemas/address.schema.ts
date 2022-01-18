import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema({
  id: false,
  _id: false,
})
export class Address {
  @Prop({ required: true })
  long!: string;

  @Prop({ required: true })
  city!: string;

  @Prop({ required: true })
  district!: string;

  @Prop({ required: true })
  neighbourhood!: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
