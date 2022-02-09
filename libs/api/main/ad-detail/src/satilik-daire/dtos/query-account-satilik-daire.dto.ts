import { IsOptional, IsString } from 'class-validator';

export class QueryAccountSatilikDaireDto {
  @IsOptional()
  @IsString()
  something?: string;
}
