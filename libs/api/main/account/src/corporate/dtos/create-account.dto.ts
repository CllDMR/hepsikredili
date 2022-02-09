import { IsEmail, IsString } from 'class-validator';

export class CreateAccountCorporateDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  name!: string;
}
