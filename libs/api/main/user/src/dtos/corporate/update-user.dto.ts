import { IsAlphanumeric, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserCorporateDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  @IsAlphanumeric()
  password!: string;
}
