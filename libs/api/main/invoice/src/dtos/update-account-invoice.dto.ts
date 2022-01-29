import { IsOptional } from 'class-validator';

export class UpdateAccountInvoiceDto {
  @IsOptional()
  something?: string;
}
