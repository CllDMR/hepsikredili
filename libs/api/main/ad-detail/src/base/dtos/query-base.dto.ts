import { IsOptional, IsString } from 'class-validator';

export class QueryBaseDto {
  @IsOptional()
  @IsString()
  something?: string;
}
