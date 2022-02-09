import { UpdateAddressDto } from '@hepsikredili/api/main/shared';
import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsMongoId,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdateBaseDto {
  @IsOptional()
  @IsString()
  @IsMongoId()
  account?: string;

  @IsOptional()
  @IsString()
  @IsAlphanumericWithSpaces()
  name?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => UpdateAddressDto)
  address?: UpdateAddressDto;
}
