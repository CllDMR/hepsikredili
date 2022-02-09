import { IsOptional } from 'class-validator';

export class QueryAccountPlanDto {
  @IsOptional()
  something?: string;
}
