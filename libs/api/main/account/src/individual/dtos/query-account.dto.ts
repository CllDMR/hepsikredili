import { IsOptional } from 'class-validator';

export class QueryAccountIndividualDto {
  @IsOptional()
  something?: string;
}
