import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountBaseController } from './base/controllers/account.controller';
import { ApiMainAccountBaseService } from './base/services/account.service';
import { ApiMainAccountCorporateController } from './corporate/controllers/account.controller';
import { ApiMainAccountCorporateService } from './corporate/services/account.service';
import { ApiMainAccountIndividualController } from './individual/controllers/account.controller';
import { ApiMainAccountIndividualService } from './individual/services/account.service';

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
