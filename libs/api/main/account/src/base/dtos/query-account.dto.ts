import { IsOptional } from 'class-validator';

export class QueryAccountBaseDto {
  @IsOptional()
  something?: string;
}
