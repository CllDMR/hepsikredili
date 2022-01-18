import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainUserIndividualController } from './user.controller';

describe('ApiMainUserIndividualController', () => {
  let controller: ApiMainUserIndividualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainUserIndividualController],
    }).compile();

    controller = module.get<ApiMainUserIndividualController>(
      ApiMainUserIndividualController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
