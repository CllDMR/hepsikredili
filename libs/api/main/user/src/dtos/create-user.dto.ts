import { Role } from '@hepsikredili/api/main/shared';
import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsMongoId,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsMongoId()
  account!: string;

  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsAlphanumeric()
  password!: string;

  @IsString()
  @IsEnum(Role)
  role!: Role;
}
