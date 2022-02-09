import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateCepheDto {
  @IsOptional()
  @IsBoolean()
  batı?: boolean;

  @IsOptional()
  @IsBoolean()
  doğu?: boolean;

  @IsOptional()
  @IsBoolean()
  kuzey?: boolean;

  @IsOptional()
  @IsBoolean()
  güney?: boolean;
}
