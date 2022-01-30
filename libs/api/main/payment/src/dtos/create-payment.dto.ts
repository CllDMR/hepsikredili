import { IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsOptional()
  something?: string;
}
