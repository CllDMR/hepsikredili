import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateUserBaseDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;
}
