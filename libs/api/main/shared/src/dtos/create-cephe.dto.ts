import { IsBoolean } from 'class-validator';

export class CreateCepheDto {
  @IsBoolean()
  batı!: boolean;

  @IsBoolean()
  doğu!: boolean;

  @IsBoolean()
  kuzey!: boolean;

  @IsBoolean()
  güney!: boolean;
}
