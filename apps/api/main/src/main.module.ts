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
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        ttl: config.get('RATE_LIMIT_TTL'),
        limit: config.get('RATE_LIMIT_LIMIT'),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGO_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      }),
    }),

    ApiMainSharedModule,
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
})
export class ApiMainMainModule {}
