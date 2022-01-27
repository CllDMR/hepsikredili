import {
  JwtAuthGuard,
  PoliciesMembershipGuard,
} from '@hepsikredili/api/main/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AccountSatilikDaireService } from '../services/account-satilik-daire.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/ads-satilik-daire')
export class AccountSatilikDaireController {
  constructor(
    private readonly accountSatilikDaireService: AccountSatilikDaireService
  ) {}
}
