import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainUserBaseService } from './user.service';

describe('ApiMainUserBaseService', () => {
  let service: ApiMainUserBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainUserBaseService],
    }).compile();

    service = module.get<ApiMainUserBaseService>(ApiMainUserBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
