import { CreateCepheDto } from '@hepsikredili/api/main/shared';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsMongoId,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateBaseDetailDto {
  @IsString()
  @IsMongoId()
  account!: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateCepheDto)
  cephe!: CreateCepheDto;

  @IsString()
  description!: string;
}
