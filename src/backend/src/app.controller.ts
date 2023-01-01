import { Controller, Get } from '@nestjs/common';
import { MongoService } from 'mongo/mongo.service';

@Controller()
export class AppController {
  constructor(private readonly mongoService: MongoService) {
  }

  @Get()
  async getHello(): Promise<any> {
    return "";
  }
}
