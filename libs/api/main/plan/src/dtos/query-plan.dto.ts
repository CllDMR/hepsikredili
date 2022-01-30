import { IsOptional } from 'class-validator';

export class QueryPlanDto {
  @IsOptional()
  something?: string;
}
