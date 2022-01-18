import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountUserCorporateController } from './account-user.controller';

describe('ApiMainAccountUserCorporateController', () => {
  let controller: ApiMainAccountUserCorporateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainAccountUserCorporateController],
    }).compile();

    controller = module.get<ApiMainAccountUserCorporateController>(
      ApiMainAccountUserCorporateController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
