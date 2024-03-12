import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReminderController } from './reminder.controller';
import { ReminderService } from './reminder.service';
import { Reminder, ReminderSchema } from './Reminder.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reminder.name, schema: ReminderSchema, collection: 'Reminder' },
    ]),
  ],
  controllers: [ReminderController],
  providers: [ReminderService],
})
export class ReminderModule {}
