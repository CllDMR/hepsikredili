import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainPaymentService } from './payment.service';

describe('ApiMainPaymentService', () => {
  let service: ApiMainPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainPaymentService],
    }).compile();

    service = module.get<ApiMainPaymentService>(ApiMainPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
