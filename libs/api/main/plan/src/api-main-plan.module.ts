import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainPlanController } from './controllers/plan.controller';
import { ApiMainPlanService } from './services/plan.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainPlanController],
  providers: [ApiMainPlanService],
  exports: [ApiMainPlanService],
})
export class ApiMainPlanModule {}
