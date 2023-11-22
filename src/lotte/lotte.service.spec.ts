import { Test, TestingModule } from '@nestjs/testing';
import { LotteService } from './lotte.service';

describe('LotteService', () => {
  let service: LotteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LotteService],
    }).compile();

    service = module.get<LotteService>(LotteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
