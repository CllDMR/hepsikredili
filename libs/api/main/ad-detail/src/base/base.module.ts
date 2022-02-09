import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { AccountBaseController } from './controllers/account-base-detail.controller';
import { BaseController } from './controllers/base.controller';
import { AccountBaseService } from './services/account-base.service';
import { BaseService } from './services/base.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [BaseController, AccountBaseController],
  providers: [BaseService, AccountBaseService],
  exports: [BaseService, AccountBaseService],
})
export class BaseModule {}
