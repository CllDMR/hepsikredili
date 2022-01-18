import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainUserService } from './user.service';

describe('ApiMainUserService', () => {
  let service: ApiMainUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiMainUserService],
    }).compile();

    service = module.get<ApiMainUserService>(ApiMainUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
