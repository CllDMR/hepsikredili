import { ApiMainSharedMongooseModule } from '@hepsikredili/api/main/shared';
import { Module } from '@nestjs/common';
import { PlanController } from './controllers/plan.controller';
import { PlanService } from './services/plan.service';

@Module({
  imports: [ApiMainSharedMongooseModule],
  controllers: [PlanController],
  providers: [PlanService],
  exports: [],
})
export class ApiMainPlanModule {}
