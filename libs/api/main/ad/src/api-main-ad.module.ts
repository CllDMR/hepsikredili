import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountAdController } from './controllers/account-ad.controller';
import { ApiMainAdController } from './controllers/ad.controller';
import { ApiMainAccountAdService } from './services/account-ad.service';
import { ApiMainAdService } from './services/ad.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainAdController, ApiMainAccountAdController],
  providers: [ApiMainAdService, ApiMainAccountAdService],
  exports: [ApiMainAdService, ApiMainAccountAdService],
})
export class ApiMainAdModule {}
