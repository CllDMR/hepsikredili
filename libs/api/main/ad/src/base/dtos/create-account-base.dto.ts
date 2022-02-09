import { CreateAddressDto } from '@hepsikredili/api/main/shared';
import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateAccountBaseDto {
  @IsString()
  @IsAlphanumericWithSpaces()
  name!: string;

  @IsNumber()
  price!: number;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address!: CreateAddressDto;
}
