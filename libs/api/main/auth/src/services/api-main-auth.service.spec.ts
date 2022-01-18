import { Test } from '@nestjs/testing';
import { ApiMainAuthService } from './api-main-auth.service';

describe('ApiMainAuthService', () => {
  let service: ApiMainAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiMainAuthService],
    }).compile();

    service = module.get(ApiMainAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
