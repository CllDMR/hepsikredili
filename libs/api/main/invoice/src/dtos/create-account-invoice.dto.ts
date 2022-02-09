import { IsOptional } from 'class-validator';

export class CreateAccountInvoiceDto {
  @IsOptional()
  something?: string;
}
