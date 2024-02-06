import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from 'schemas/todo.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Todo[]> {
    return this.appService.findAll();
  }
}
