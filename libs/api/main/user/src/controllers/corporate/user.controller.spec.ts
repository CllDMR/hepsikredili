import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainUserCorporateController } from './user.controller';

describe('ApiMainUserCorporateController', () => {
  let controller: ApiMainUserCorporateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainUserCorporateController],
    }).compile();

    controller = module.get<ApiMainUserCorporateController>(
      ApiMainUserCorporateController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
