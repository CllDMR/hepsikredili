import {
  ApiMainSharedCaslModule,
  ApiMainSharedMongooseModule,
} from '@hepsikredili/api/main/shared';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerModule } from '@nestjs/throttler';
import { Connection } from 'mongoose';
import { ApiMainUserService } from '../services/user.service';
import { ApiMainUserController } from './user.controller';

describe('ApiMainUserController', () => {
  let controller: ApiMainUserController;
  let connection: Connection;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

        ApiMainSharedMongooseModule,
        ApiMainSharedCaslModule,
      ],
      controllers: [ApiMainUserController],
      providers: [ApiMainUserService],
    }).compile();

    controller = module.get<ApiMainUserController>(ApiMainUserController);
    connection = module.get(getConnectionToken());
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
