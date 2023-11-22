import { Module } from '@nestjs/common';
import { LotteService } from './lotte.service';
import { LotteController } from './lotte.controller';

@Module({
  controllers: [LotteController],
  providers: [LotteService],
})
export class LotteModule {}
