import { IsOptional, IsString } from 'class-validator';

export class QueryAccountBaseDto {
  @IsOptional()
  @IsString()
  something?: string;
}
