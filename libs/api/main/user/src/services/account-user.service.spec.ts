import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountUserService } from './account-user.service';

describe('ApiMainAccountUserService', () => {
  let service: ApiMainAccountUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainAccountUserService],
    }).compile();

    service = module.get<ApiMainAccountUserService>(ApiMainAccountUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
