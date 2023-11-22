import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LotteModule } from './lotte/lotte.module';

@Module({
  imports: [LotteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
