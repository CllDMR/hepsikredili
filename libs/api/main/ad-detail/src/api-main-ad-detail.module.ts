import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountAdDetailController } from './controllers/account-ad-detail.controller';
import { ApiMainAdDetailController } from './controllers/ad-detail.controller';
import { ApiMainAccountAdDetailService } from './services/account-ad-detail.service';
import { ApiMainAdDetailService } from './services/ad-detail.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainAdDetailController, ApiMainAccountAdDetailController],
  providers: [ApiMainAdDetailService, ApiMainAccountAdDetailService],
  exports: [ApiMainAdDetailService, ApiMainAccountAdDetailService],
})
export class ApiMainAdDetailModule {}
