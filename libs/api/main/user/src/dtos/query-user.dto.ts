import { IsOptional } from 'class-validator';

export class QueryUserDto {
  @IsOptional()
  something?: string;
}
