import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { IsOptional, IsString } from 'class-validator';

export class QueryUserIndividualDto {
  @IsOptional()
  @IsString()
  @IsAlphanumericWithSpaces()
  search?: string;
}
