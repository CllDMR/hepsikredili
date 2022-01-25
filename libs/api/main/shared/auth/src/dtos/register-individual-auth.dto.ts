import { IsEmail, IsString } from 'class-validator';

export class RegisterIndividualAuthDto {
  @IsString()
  @IsEmail()
  accountEmail!: string;

  @IsString()
  accountName!: string;

  @IsString()
  @IsEmail()
  userEmail!: string;

  @IsString()
  password!: string;
}
