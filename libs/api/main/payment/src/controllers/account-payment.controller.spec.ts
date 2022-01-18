import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainAccountPaymentController } from './account-payment.controller';

describe('ApiMainAccountPaymentController', () => {
  let controller: ApiMainAccountPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainAccountPaymentController],
    }).compile();

    controller = module.get<ApiMainAccountPaymentController>(
      ApiMainAccountPaymentController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
