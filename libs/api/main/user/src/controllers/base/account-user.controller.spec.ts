import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountUserBaseController } from './account-user.controller';

describe('ApiMainAccountUserBaseController', () => {
  let controller: ApiMainAccountUserBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainAccountUserBaseController],
    }).compile();

    controller = module.get<ApiMainAccountUserBaseController>(
      ApiMainAccountUserBaseController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
