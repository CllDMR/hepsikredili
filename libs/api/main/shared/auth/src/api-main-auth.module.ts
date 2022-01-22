import { ApiMainAccountModule } from '@hepsikredili/api/main/account';
import { ApiMainSharedCaslModule } from '@hepsikredili/api/main/shared';
import { ApiMainUserModule } from '@hepsikredili/api/main/user';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ApiMainAuthController } from './controllers/auth.controller';
import { ApiMainAuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    ApiMainSharedCaslModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: '14d' },
      }),
    }),

    ApiMainUserModule,
    ApiMainAccountModule,
  ],
  providers: [ApiMainAuthService, LocalStrategy, JwtStrategy],
  controllers: [ApiMainAuthController],
})
export class ApiMainAuthModule {}
