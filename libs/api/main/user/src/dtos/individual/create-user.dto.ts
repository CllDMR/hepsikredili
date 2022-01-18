import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateUserIndividualDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;
}
