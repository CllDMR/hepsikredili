import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainUserBaseController } from './user.controller';

describe('ApiMainUserBaseController', () => {
  let controller: ApiMainUserBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainUserBaseController],
    }).compile();

    controller = module.get<ApiMainUserBaseController>(
      ApiMainUserBaseController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
