import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateAccountBaseDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;
}
