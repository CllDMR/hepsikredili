import { IsString } from 'class-validator';

export class RegisterCorporateAuthDto {
  @IsString()
  email!: string;

  @IsString()
  password!: string;
}
