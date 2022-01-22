import { ApiMainAccountModule } from '@hepsikredili/api/main/account';
import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { ApiMainUserModule } from '@hepsikredili/api/main/user';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Test } from '@nestjs/testing';
import { ThrottlerModule } from '@nestjs/throttler';
import { ApiMainAuthService } from './auth.service';

describe('ApiMainAuthService', () => {
  let service: ApiMainAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          expandVariables: true,
          cache: true,
          envFilePath: `${process.cwd()}/apps/api/main/.env`,
        }),
        ThrottlerModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => ({
            ttl: config.get('RATE_LIMIT_TTL'),
            limit: config.get('RATE_LIMIT_LIMIT'),
          }),
        }),
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => ({
            uri: config.get('MONGO_URI'),
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
          }),
        }),

        PassportModule,
        JwtModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => ({
            secret: config.get('JWT_SECRET'),
            signOptions: { expiresIn: '14d' },
          }),
        }),

        ApiMainSharedMongooseModule,
        ApiMainSharedCaslModule,

        ApiMainUserModule,
        ApiMainAccountModule,
      ],

      providers: [ApiMainAuthService],
    }).compile();

    service = module.get(ApiMainAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
