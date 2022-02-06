import { CreateCepheDto } from '@hepsikredili/api/main/shared';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateAccountBaseDetailDto {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateCepheDto)
  cephe!: CreateCepheDto;

  @IsString()
  description!: string;
}
