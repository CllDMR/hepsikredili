import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountPaymentController } from './controllers/account-payment.controller';
import { ApiMainPaymentController } from './controllers/payment.controller';
import { ApiMainAccountPaymentService } from './services/account-payment.service';
import { ApiMainPaymentService } from './services/payment.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainPaymentController, ApiMainAccountPaymentController],
  providers: [ApiMainPaymentService, ApiMainAccountPaymentService],
  exports: [ApiMainPaymentService, ApiMainAccountPaymentService],
})
export class ApiMainPaymentModule {}
