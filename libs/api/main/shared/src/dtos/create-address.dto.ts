import { IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  long!: string;

  @IsString()
  city!: string;

  @IsString()
  district!: string;

  @IsString()
  neighbourhood!: string;
}
