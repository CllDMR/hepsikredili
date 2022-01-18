import { Test } from '@nestjs/testing';
import { ApiMainAuthService } from '../services/api-main-auth.service';
import { ApiMainAuthController } from './api-main-auth.controller';

describe('ApiMainAuthController', () => {
  let controller: ApiMainAuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiMainAuthService],
      controllers: [ApiMainAuthController],
    }).compile();

    controller = module.get(ApiMainAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
