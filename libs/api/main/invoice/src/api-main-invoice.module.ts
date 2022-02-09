import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountInvoiceController } from './controllers/account-invoice.controller';
import { ApiMainInvoiceController } from './controllers/invoice.controller';
import { ApiMainAccountInvoiceService } from './services/account-invoice.service';
import { ApiMainInvoiceService } from './services/invoice.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainInvoiceController, ApiMainAccountInvoiceController],
  providers: [ApiMainInvoiceService, ApiMainAccountInvoiceService],
  exports: [ApiMainInvoiceService, ApiMainAccountInvoiceService],
})
export class ApiMainInvoiceModule {}
