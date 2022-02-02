import { UpdateCepheDto } from '@hepsikredili/api/main/shared';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsMongoId,
  IsNotEmptyObject,
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
  @IsMongoId()
  ad?: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => UpdateCepheDto)
  cephe?: UpdateCepheDto;

  @IsOptional()
  @IsString()
  description?: string;
}
