import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainUserIndividualService } from './user.service';

describe('ApiMainUserIndividualService', () => {
  let service: ApiMainUserIndividualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainUserIndividualService],
    }).compile();

    service = module.get<ApiMainUserIndividualService>(
      ApiMainUserIndividualService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
