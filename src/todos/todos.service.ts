import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todos.interface';

@Injectable()
export class TodosService {
  constructor(@InjectModel('todo') private readonly todoModel: Model<Todo>) {}

  async create(title: string): Promise<Todo> {
    try {
      const todoDocument = await this.todoModel.create({ title });
      return todoDocument;
    } catch (err) {}
  }

  async getAll(): Promise<Todo> {
    try {
      // const todoDocument = await this.todoModel.find();
      return await this.todoModel.find();
    } catch (err) {}
  }
}
