import { IsOptional } from 'class-validator';

export class QueryAccountCorporateDto {
  @IsOptional()
  something?: string;
}
