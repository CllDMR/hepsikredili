import { IsOptional } from 'class-validator';

export class CreateAccountPlanDto {
  @IsOptional()
  something?: string;
}
