import { JWTPayload, MyRequest } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Types } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: JWTPayload) {
    const reqUser: MyRequest['user'] = {
      account_ids: payload.accs,
      user_id: new Types.ObjectId(payload.usr),
      role: payload.role,
    };
    return reqUser;
  }
}
