import {
  JwtAuthGuard,
  PoliciesMembershipGuard,
} from '@hepsikredili/api/main/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiMainAccountAdDetailService } from '../services/account-ad-detail.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/ad-details')
export class ApiMainAccountAdDetailController {
  constructor(
    private readonly accountadDetailService: ApiMainAccountAdDetailService
  ) {}
}
