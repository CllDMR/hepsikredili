import { IsOptional } from 'class-validator';

export class UpdateAccountPaymentDto {
  @IsOptional()
  something?: string;
}
