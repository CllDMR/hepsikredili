import {
  JwtAuthGuard,
  PoliciesMembershipGuard,
} from '@hepsikredili/api/main/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AccountBaseService } from '../services/account-base.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/ad-details')
export class AccountBaseController {
  constructor(private readonly accountBaseService: AccountBaseService) {}
}
