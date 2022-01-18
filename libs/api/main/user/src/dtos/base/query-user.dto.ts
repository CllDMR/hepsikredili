import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { IsOptional, IsString } from 'class-validator';

export class QueryUserBaseDto {
  @IsOptional()
  @IsString()
  @IsAlphanumericWithSpaces()
  search?: string;
}
