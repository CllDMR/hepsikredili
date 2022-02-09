import { Module } from '@nestjs/common';
import { BaseModule } from './base/base.module';
import { SatilikDaireModule } from './satilik-daire/satilik-daire.module';

@Module({
  imports: [BaseModule, SatilikDaireModule],
})
export class ApiMainAdModule {}
