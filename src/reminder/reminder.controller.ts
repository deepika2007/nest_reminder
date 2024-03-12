import { Controller, Post, Body } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { Reminder, ReminderDocument } from './reminder.schema';
import { Model } from 'mongoose';

@Controller('reminder')
export class ReminderController {
  constructor(
    private readonly reminderService: ReminderService,
    private reminderModel: Model<ReminderDocument>,
  ) {}

  @Post()
  async create(@Body() reminder: Reminder): Promise<string> {
    await this.reminderModel.create(reminder);
    await this.reminderService.sendReminderEmail(reminder.email, 'mail sent');
    return 'Reminder set successfully';
  }
}
