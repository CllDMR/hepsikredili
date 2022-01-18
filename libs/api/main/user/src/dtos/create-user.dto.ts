import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;
}
