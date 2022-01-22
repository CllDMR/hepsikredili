import { IsAlphanumeric, IsEmail, IsMongoId, IsString } from 'class-validator';

export class CreateUserIndividualDto {
  @IsString()
  @IsMongoId()
  account!: string;

  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;
}
