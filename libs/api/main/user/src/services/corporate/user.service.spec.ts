import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainUserCorporateService } from './user.service';

describe('ApiMainUserCorporateService', () => {
  let service: ApiMainUserCorporateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainUserCorporateService],
    }).compile();

    service = module.get<ApiMainUserCorporateService>(
      ApiMainUserCorporateService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
