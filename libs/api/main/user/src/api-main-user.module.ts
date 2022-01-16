import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainUserController } from './controllers/api-main-user.controller';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainUserController],
  providers: [],
  exports: [],
})
export class ApiMainUserModule {}
