import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountUserBaseService } from './account-user.service';

describe('ApiMainAccountUserBaseService', () => {
  let service: ApiMainAccountUserBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainAccountUserBaseService],
    }).compile();

    service = module.get<ApiMainAccountUserBaseService>(
      ApiMainAccountUserBaseService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
