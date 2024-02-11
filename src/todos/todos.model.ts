import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './todos.schema';

export const TodoModel = MongooseModule.forFeature([
  { name: 'todo', schema: TodoSchema },
]);
