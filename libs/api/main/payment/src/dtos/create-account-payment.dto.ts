import { IsOptional } from 'class-validator';

export class CreateAccountPaymentDto {
  @IsOptional()
  something?: string;
}
