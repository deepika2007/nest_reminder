import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Todo } from 'schemas/todo.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: mongoose.Model<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    const todos = await this.todoModel.find();
    return todos;
  }
}
