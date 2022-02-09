import { IsOptional } from 'class-validator';

export class CreateInvoiceDto {
  @IsOptional()
  something?: string;
}
