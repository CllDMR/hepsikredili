import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainPaymentController } from './payment.controller';

describe('ApiMainPaymentController', () => {
  let controller: ApiMainPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainPaymentController],
    }).compile();

    controller = module.get<ApiMainPaymentController>(ApiMainPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
