import { IsOptional } from 'class-validator';

export class QueryAccountPaymentDto {
  @IsOptional()
  something?: string;
}
