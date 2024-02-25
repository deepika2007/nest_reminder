import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todos.controller';
import { TodosService } from './todos.service';
import { Todo, TodoSchema } from './todos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Todo.name, schema: TodoSchema, collection: 'todos' },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodosService],
})
export class TodoModule {}
