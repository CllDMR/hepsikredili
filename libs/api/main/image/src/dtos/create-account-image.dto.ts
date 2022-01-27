import { IsString } from 'class-validator';

export class CreateAccountImageDto {
  @IsString()
  url!: string;
  @IsString()
  cloudinaryId!: string;
  @IsString()
  owner!: string;
}
