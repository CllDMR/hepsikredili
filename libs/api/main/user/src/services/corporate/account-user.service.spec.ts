import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountUserCorporateService } from './account-user.service';

describe('ApiMainAccountUserCorporateService', () => {
  let service: ApiMainAccountUserCorporateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainAccountUserCorporateService],
    }).compile();

    service = module.get<ApiMainAccountUserCorporateService>(
      ApiMainAccountUserCorporateService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
