import { IsAlphanumeric, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateAccountCorporateDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  @IsAlphanumeric()
  password!: string;
}
