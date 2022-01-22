import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { IsOptional, IsString } from 'class-validator';

export class QueryAccountIndividualDto {
  @IsOptional()
  @IsString()
  @IsAlphanumericWithSpaces()
  search?: string;
}
