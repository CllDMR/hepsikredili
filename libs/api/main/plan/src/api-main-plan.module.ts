import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { ApiMainAccountPlanController } from './controllers/account-plan.controller';
import { ApiMainPlanController } from './controllers/plan.controller';
import { ApiMainAccountPlanService } from './services/account-plan.service';
import { ApiMainPlanService } from './services/plan.service';

@Module({
  imports: [ApiMainSharedMongooseModule, ApiMainSharedCaslModule],
  controllers: [ApiMainPlanController, ApiMainAccountPlanController],
  providers: [ApiMainPlanService, ApiMainAccountPlanService],
  exports: [ApiMainPlanService, ApiMainAccountPlanService],
})
export class ApiMainPlanModule {}
