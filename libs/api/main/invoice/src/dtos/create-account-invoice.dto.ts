import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { IsNumber, IsString } from 'class-validator';

export class CreateAccountInvoiceDto {
  @IsString()
  @IsAlphanumericWithSpaces()
  name!: string;

  @IsNumber()
  price!: number;

  @IsNumber()
  adLimit!: number;
}
