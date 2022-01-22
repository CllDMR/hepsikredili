import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateAccountCorporateDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;
}
