import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CepheDocument = Cephe & Document;

@Schema({
  id: false,
  _id: false,
})
export class Cephe {
  @Prop({ required: true })
  batı!: boolean;

  @Prop({ required: true })
  doğu!: boolean;

  @Prop({ required: true })
  kuzey!: boolean;

  @Prop({ required: true })
  güney!: boolean;
}

export const CepheSchema = SchemaFactory.createForClass(Cephe);
