import {
  JwtAuthGuard,
  PoliciesMembershipGuard,
} from '@hepsikredili/api/main/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiMainAccountAdService } from '../services/account-ad.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/ads')
export class ApiMainAccountAdController {
  constructor(private readonly accountAdService: ApiMainAccountAdService) {}
}
