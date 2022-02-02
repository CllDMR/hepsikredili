import { IsOptional, IsString } from 'class-validator';

export class QuerySatilikDaireDto {
  @IsOptional()
  @IsString()
  something?: string;
}
