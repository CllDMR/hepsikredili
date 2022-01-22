import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAccountPaymentDto {
  @IsOptional()
  @IsString()
  @IsAlphanumericWithSpaces()
  name?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  adLimit?: number;
}