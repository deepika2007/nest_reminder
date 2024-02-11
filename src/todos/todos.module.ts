import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoModel } from './todos.model';

@Module({
  imports: [TodoModel],
  providers: [TodosService],
  exports: [TodosService],
})
export class TodoModule {}
