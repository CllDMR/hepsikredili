import { IsOptional } from 'class-validator';

export class QueryPaymentDto {
  @IsOptional()
  something?: string;
}
