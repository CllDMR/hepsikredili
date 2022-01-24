import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { IsOptional, IsString } from 'class-validator';

export class QueryUserDto {
  @IsOptional()
  @IsString()
  @IsAlphanumericWithSpaces()
  search?: string;
}
