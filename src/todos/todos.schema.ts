import * as mongoose from 'mongoose';

import { Todo } from './todos.interface';

export const TodoSchema = new mongoose.Schema<Todo>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
