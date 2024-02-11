import { ObjectId } from 'mongoose';

export type Todo = Readonly<{
  _id: ObjectId;
  title: string;
}>;
