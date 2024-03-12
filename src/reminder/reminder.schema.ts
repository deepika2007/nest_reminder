import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ReminderDocument = Reminder & Document;

@Schema()
export class Reminder {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'todos' })
  todo: MongooseSchema.Types.ObjectId;
}

export const ReminderSchema = SchemaFactory.createForClass(Reminder);
