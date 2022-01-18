import { IsAlphanumeric, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserIndividualDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  @IsAlphanumeric()
  password!: string;
}
