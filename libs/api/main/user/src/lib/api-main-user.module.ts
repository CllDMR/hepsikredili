import { ApiMainSharedMongooseModule } from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainUserController } from './api-main-user.controller';

@Module({
  imports: [ApiMainSharedMongooseModule],
  controllers: [ApiMainUserController],
  providers: [],
  exports: [],
})
export class ApiMainUserModule {}
