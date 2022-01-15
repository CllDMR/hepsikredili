import { Module } from '@nestjs/common';
import { ApiMainUserController } from './api-main-user.controller';

@Module({
  controllers: [ApiMainUserController],
  providers: [],
  exports: [],
})
export class ApiMainUserModule {}
