import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountUserController } from './controllers/account-user.controller';
import { ApiMainUserController } from './controllers/user.controller';
import { ApiMainAccountUserService } from './services/account-user.service';
import { ApiMainUserService } from './services/user.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainUserController, ApiMainAccountUserController],
  providers: [ApiMainUserService, ApiMainAccountUserService],
  exports: [ApiMainUserService, ApiMainAccountUserService],
})
export class ApiMainUserModule {}
