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

export class UpdateSatilikDaireDto {
  @IsOptional()
  @IsString()
  @IsMongoId()
  account?: string;

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
