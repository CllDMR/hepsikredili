import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountUserBaseController } from './controllers/base/account-user.controller';
import { ApiMainUserBaseController } from './controllers/base/user.controller';
import { ApiMainAccountUserCorporateController } from './controllers/corporate/account-user.controller';
import { ApiMainUserCorporateController } from './controllers/corporate/user.controller';
import { ApiMainAccountUserIndividualController } from './controllers/individual/account-user.controller';
import { ApiMainUserIndividualController } from './controllers/individual/user.controller';
import { ApiMainAccountUserBaseService } from './services/base/account-user.service';
import { ApiMainUserBaseService } from './services/base/user.service';
import { ApiMainAccountUserCorporateService } from './services/corporate/account-user.service';
import { ApiMainUserCorporateService } from './services/corporate/user.service';
import { ApiMainAccountUserIndividualService } from './services/individual/account-user.service';
import { ApiMainUserIndividualService } from './services/individual/user.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [
    ApiMainUserBaseController,
    ApiMainAccountUserBaseController,
    ApiMainUserCorporateController,
    ApiMainAccountUserCorporateController,
    ApiMainUserIndividualController,
    ApiMainAccountUserIndividualController,
  ],
  providers: [
    ApiMainUserBaseService,
    ApiMainAccountUserBaseService,
    ApiMainUserCorporateService,
    ApiMainAccountUserCorporateService,
    ApiMainUserIndividualService,
    ApiMainAccountUserIndividualService,
  ],
  exports: [
    ApiMainUserBaseService,
    ApiMainAccountUserBaseService,
    ApiMainUserCorporateService,
    ApiMainAccountUserCorporateService,
    ApiMainUserIndividualService,
    ApiMainAccountUserIndividualService,
  ],
})
export class ApiMainUserModule {}
