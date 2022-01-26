import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountImageController } from './controllers/account-image.controller';
import { ApiMainImageController } from './controllers/image.controller';
import { ApiMainAccountImageService } from './services/account-image.service';
import { ApiMainImageService } from './services/image.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainImageController, ApiMainAccountImageController],
  providers: [ApiMainImageService, ApiMainAccountImageService],
  exports: [ApiMainImageService, ApiMainAccountImageService],
})
export class ApiMainImageModule {}
