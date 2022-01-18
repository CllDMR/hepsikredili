import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountUserIndividualController } from './account-user.controller';

describe('ApiMainAccountUserIndividualController', () => {
  let controller: ApiMainAccountUserIndividualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainAccountUserIndividualController],
    }).compile();

    controller = module.get<ApiMainAccountUserIndividualController>(
      ApiMainAccountUserIndividualController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
