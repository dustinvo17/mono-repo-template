import { Controller, Get } from '@nestjs/common';
import { MongoService } from 'src/mongo/mongo.service';

@Controller()
export class AppController {
  constructor(private readonly mongoService: MongoService) {
  }

  @Get("/hello")
  async getHello(): Promise<any> {
    return {
      hello: "ok"
    }
  }
}
