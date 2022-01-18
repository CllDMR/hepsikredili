import {
  JwtAuthGuard,
  LocalAuthGuard,
  MyRequest,
  PoliciesAccountGuard,
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
import { RegisterAuthDto } from '../dtos/register-auth.dto';
import { ApiMainAuthService } from '../services/api-main-auth.service';

@Controller('auth')
export class ApiMainAuthController {
  constructor(private readonly apiMainAuthService: ApiMainAuthService) {}

  @UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesAccountGuard)
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
  @Post('register')
  register(@Body() registerAuthDto: RegisterAuthDto) {
    return this.apiMainAuthService.register(registerAuthDto);
  }
}
