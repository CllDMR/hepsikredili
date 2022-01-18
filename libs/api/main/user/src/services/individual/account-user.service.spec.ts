import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountUserIndividualService } from './account-user.service';

describe('ApiMainAccountUserIndividualService', () => {
  let service: ApiMainAccountUserIndividualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainAccountUserIndividualService],
    }).compile();

    service = module.get<ApiMainAccountUserIndividualService>(
      ApiMainAccountUserIndividualService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
