import {
  JwtAuthGuard,
  PoliciesMembershipGuard,
} from '@hepsikredili/api/main/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiMainAccountInvoiceService } from '../services/account-invoice.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/invoices')
export class ApiMainAccountInvoiceController {
  constructor(
    private readonly accountInvoiceService: ApiMainAccountInvoiceService
  ) {}
}
