import { IsString } from 'class-validator';

export class RegisterIndividualAuthDto {
  @IsString()
  email!: string;

  @IsString()
  password!: string;
}
