import { ApiMainAccountModule } from '@hepsikredili/api/main/account';
import { ApiMainAdModule } from '@hepsikredili/api/main/ad';
import { ApiMainAdDetailModule } from '@hepsikredili/api/main/ad-detail';
import { ApiMainCloudinaryModule } from '@hepsikredili/api/main/cloudinary';
import { ApiMainImageModule } from '@hepsikredili/api/main/image';
import { ApiMainInvoiceModule } from '@hepsikredili/api/main/invoice';
import { ApiMainPaymentModule } from '@hepsikredili/api/main/payment';
import { ApiMainPlanModule } from '@hepsikredili/api/main/plan';
import { ApiMainSharedModule } from '@hepsikredili/api/main/shared';
import { ApiMainUserModule } from '@hepsikredili/api/main/user';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ApiMainAccountModule,
    ApiMainAdDetailModule,
    ApiMainAdModule,
    ApiMainCloudinaryModule,
    ApiMainImageModule,
    ApiMainInvoiceModule,
    ApiMainPaymentModule,
    ApiMainPlanModule,
    ApiMainSharedModule,
    ApiMainUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
