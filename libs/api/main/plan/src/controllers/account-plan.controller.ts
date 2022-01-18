import {
  JwtAuthGuard,
  PoliciesMembershipGuard,
} from '@hepsikredili/api/main/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiMainAccountPlanService } from '../services/account-plan.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/plans')
export class ApiMainAccountPlanController {
  constructor(private readonly accountPlanService: ApiMainAccountPlanService) {}
}
