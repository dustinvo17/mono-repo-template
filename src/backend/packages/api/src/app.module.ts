import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseAuthMiddleware } from './middlewares/firebaseAuthMiddleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(FirebaseAuthMiddleware).forRoutes({
      path: "*",
      method: RequestMethod.ALL
    });
  }
}