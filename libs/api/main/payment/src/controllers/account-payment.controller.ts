import { JwtAuthGuard, PoliciesGuard } from '@hepsikredili/api/main/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiMainAccountPaymentService } from '../services/account-payment.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('accounts/:accountId/payments')
export class ApiMainAccountPaymentController {
  constructor(
    private readonly accountPaymentService: ApiMainAccountPaymentService
  ) {}
}
