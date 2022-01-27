import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryBaseDto {
  @IsOptional()
  @IsString()
  @IsAlphanumericWithSpaces()
  search?: string;

  @IsOptional()
  @IsString()
  @IsAlphanumericWithSpaces()
  name?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  priceLte?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  priceGt?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  adLimitLte?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  adLimitGt?: number;
}
