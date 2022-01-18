import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountPlanController } from './account-plan.controller';

describe('ApiMainAccountPlanController', () => {
  let controller: ApiMainAccountPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainAccountPlanController],
    }).compile();

    controller = module.get<ApiMainAccountPlanController>(
      ApiMainAccountPlanController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
