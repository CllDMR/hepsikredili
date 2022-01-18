import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountUserController } from './account-user.controller';

describe('ApiMainAccountUserController', () => {
  let controller: ApiMainAccountUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainAccountUserController],
    }).compile();

    controller = module.get<ApiMainAccountUserController>(
      ApiMainAccountUserController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
