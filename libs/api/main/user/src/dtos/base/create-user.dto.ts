import { IsAlphanumeric, IsEmail, IsMongoId, IsString } from 'class-validator';

export class CreateUserBaseDto {
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
