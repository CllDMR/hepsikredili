import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { AccountSatilikDaireController } from './controllers/account-satilik-daire.controller';
import { SatilikDaireController } from './controllers/satilik-daire.controller';
import { AccountSatilikDaireService } from './services/account-satilik-daire.service';
import { SatilikDaireService } from './services/satilik-daire.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [SatilikDaireController, AccountSatilikDaireController],
  providers: [SatilikDaireService, AccountSatilikDaireService],
})
export class SatilikDaireModule {}
