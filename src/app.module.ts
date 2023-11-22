import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LotteModule } from './lotte/lotte.module';
import { ApiUsageMiddleware } from './middleware/api-usage.middleware';

@Module({
  imports: [LotteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(ApiUsageMiddleware).forRoutes('*');
  // }
}
