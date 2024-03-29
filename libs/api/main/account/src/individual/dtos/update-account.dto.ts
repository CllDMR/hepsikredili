import { IsAlphanumeric, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateAccountIndividualDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  @IsAlphanumeric()
  password!: string;
}
