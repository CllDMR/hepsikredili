import { Module } from '@nestjs/common';
import { SatilikDaireModule } from './satilik-daire/satilik-daire.module';

@Module({
  imports: [SatilikDaireModule],
})
export class ApiMainAdDetailModule {}
