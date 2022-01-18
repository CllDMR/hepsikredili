import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateUserCorporateDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;
}
