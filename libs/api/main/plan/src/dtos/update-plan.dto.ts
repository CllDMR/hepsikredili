import { IsOptional } from 'class-validator';

export class UpdatePlanDto {
  @IsOptional()
  something?: string;
}
