import { IsOptional } from 'class-validator';

export class QueryAccountInvoiceDto {
  @IsOptional()
  something?: string;
}
