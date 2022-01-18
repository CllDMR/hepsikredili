import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainPlanService } from './plan.service';

describe('ApiMainPlanService', () => {
  let service: ApiMainPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainPlanService],
    }).compile();

    service = module.get<ApiMainPlanService>(ApiMainPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
