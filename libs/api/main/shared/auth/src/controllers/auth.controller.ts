import {
  JwtAuthGuard,
  LocalAuthGuard,
  MyRequest,
  PoliciesGuard,
} from '@hepsikredili/api/main/shared';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { RegisterCorporateAuthDto } from '../dtos/register-corporate-auth.dto';
import { RegisterIndividualAuthDto } from '../dtos/register-individual-auth.dto';
import { ApiMainAuthService } from '../services/auth.service';

@Controller('auth')
export class ApiMainAuthController {
  constructor(private readonly apiMainAuthService: ApiMainAuthService) {}

  @UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
  @Get('verify-token')
  profile(@Req() reg: MyRequest) {
    return reg.user;
  }

  @UseGuards(ThrottlerGuard, LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  login(@Req() req: MyRequest): Promise<{ accessToken: string }> {
    return this.apiMainAuthService.login(req.user);
  }

  @UseGuards(ThrottlerGuard)
  @Post('register/individual')
  registerIndividual(
    @Body() registerIndividualAuthDto: RegisterIndividualAuthDto
  ) {
    return this.apiMainAuthService.registerIndividual(
      registerIndividualAuthDto
    );
  }

  @UseGuards(ThrottlerGuard)
  @Post('register/corporate')
  registerCorporate(
    @Body() registerCorporateAuthDto: RegisterCorporateAuthDto
  ) {
    return this.apiMainAuthService.registerCorporate(registerCorporateAuthDto);
  }
}
