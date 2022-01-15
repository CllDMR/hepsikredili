import { ApiMainSharedMongooseModule } from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';

@Module({
  imports: [ApiMainSharedMongooseModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiMainAdModule {}
