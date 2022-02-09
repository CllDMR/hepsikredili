import { IsOptional } from 'class-validator';

export class UpdateInvoiceDto {
  @IsOptional()
  something?: string;
}
