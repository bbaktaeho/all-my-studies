import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 여기가 바로 라우터 되시겠다!
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  addHello() {}
}
