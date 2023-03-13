import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {
  }

  @Get("/hello")
  async getHello(): Promise<any> {
    return {
      hello: "ok"
    }
  }
}
