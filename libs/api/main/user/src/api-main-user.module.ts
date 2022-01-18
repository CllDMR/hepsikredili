import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainUserController } from './controllers/user.controller';
import { ApiMainUserService } from './services/user.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainUserController],
  providers: [ApiMainUserService],
  exports: [ApiMainUserService],
})
export class ApiMainUserModule {}
