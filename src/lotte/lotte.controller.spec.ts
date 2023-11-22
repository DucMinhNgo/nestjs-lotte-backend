import { Test, TestingModule } from '@nestjs/testing';
import { LotteController } from './lotte.controller';
import { LotteService } from './lotte.service';

describe('LotteController', () => {
  let controller: LotteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LotteController],
      providers: [LotteService],
    }).compile();

    controller = module.get<LotteController>(LotteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
