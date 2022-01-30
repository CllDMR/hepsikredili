import { IsOptional } from 'class-validator';

export class CreatePlanDto {
  @IsOptional()
  something?: string;
}
