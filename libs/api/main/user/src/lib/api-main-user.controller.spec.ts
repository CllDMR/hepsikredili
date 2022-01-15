import { Test } from '@nestjs/testing';
import { ApiMainUserController } from './api-main-user.controller';

describe('ApiMainUserController', () => {
  let controller: ApiMainUserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiMainUserController],
    }).compile();

    controller = module.get(ApiMainUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
