import { ApiMainAccountModule } from '@hepsikredili/api/main/account';
import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { ApiMainUserModule } from '@hepsikredili/api/main/user';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Test } from '@nestjs/testing';
import { ThrottlerModule } from '@nestjs/throttler';
import { Connection } from 'mongoose';
import { ApiMainAuthService } from '../services/auth.service';
import { ApiMainAuthController } from './auth.controller';

describe('ApiMainAuthController', () => {
  let controller: ApiMainAuthController;
  let connection: Connection;

  beforeAll(async () => {
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
          useFactory: async () => ({
            uri: process.env.MONGO_URI_TEST,
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

      controllers: [ApiMainAuthController],
      providers: [ApiMainAuthService],
    }).compile();

    controller = module.get(ApiMainAuthController);
    connection = module.get(getConnectionToken());
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
