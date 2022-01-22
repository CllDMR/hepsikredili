import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateAccountIndividualDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;
}
