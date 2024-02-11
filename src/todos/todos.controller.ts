import { Controller, Get, Req } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.interface';

@Controller('/api/todo')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async findAll(@Req() req: any): Promise<Todo> {
    const todos = await this.todoService.getAll();
    return { todos };
  }
}
