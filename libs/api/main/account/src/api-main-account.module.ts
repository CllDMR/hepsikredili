import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountBaseController } from './controllers/base/account.controller';
import { ApiMainAccountCorporateController } from './controllers/corporate/account.controller';
import { ApiMainAccountIndividualController } from './controllers/individual/account.controller';
import { ApiMainAccountBaseService } from './services/base/account.service';
import { ApiMainAccountCorporateService } from './services/corporate/account.service';
import { ApiMainAccountIndividualService } from './services/individual/account.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [
    ApiMainAccountBaseController,
    ApiMainAccountCorporateController,
    ApiMainAccountIndividualController,
  ],
  providers: [
    ApiMainAccountBaseService,
    ApiMainAccountCorporateService,
    ApiMainAccountIndividualService,
  ],
  exports: [
    ApiMainAccountBaseService,
    ApiMainAccountCorporateService,
    ApiMainAccountIndividualService,
  ],
})
export class ApiMainAccountModule {}
