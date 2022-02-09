import { UpdateCepheDto } from '@hepsikredili/api/main/shared';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdateAccountBaseDto {
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
