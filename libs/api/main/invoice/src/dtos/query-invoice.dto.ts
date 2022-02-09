import { IsOptional } from 'class-validator';

export class QueryInvoiceDto {
  @IsOptional()
  something?: string;
}
