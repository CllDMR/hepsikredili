import { MyRequest } from '@hepsikredili/api/main/shared';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ApiMainAuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: ApiMainAuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<MyRequest['user']> {
    const user = await this.authService.validateUser(email, password);
    if (!user) throw new UnauthorizedException();
    return {
      account_ids: user.accounts,
      user_id: user._id,
    };
  }
}
