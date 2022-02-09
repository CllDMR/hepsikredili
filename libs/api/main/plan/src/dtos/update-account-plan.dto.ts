import { IsOptional } from 'class-validator';

export class UpdateAccountPlanDto {
  @IsOptional()
  something?: string;
}
