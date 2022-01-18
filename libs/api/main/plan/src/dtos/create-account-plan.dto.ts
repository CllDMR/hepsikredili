import { IsAlphanumericWithSpaces } from '@hepsikredili/api/shared';
import { IsNumber, IsString } from 'class-validator';

export class CreateAccountPlanDto {
  @IsString()
  @IsAlphanumericWithSpaces()
  name!: string;

  @IsNumber()
  price!: number;

  @IsNumber()
  adLimit!: number;
}
