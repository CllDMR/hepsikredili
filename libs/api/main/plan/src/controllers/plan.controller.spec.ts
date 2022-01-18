import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainPlanController } from './plan.controller';

describe('ApiMainPlanController', () => {
  let controller: ApiMainPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainPlanController],
    }).compile();

    controller = module.get<ApiMainPlanController>(ApiMainPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
