import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Reminder, ReminderDocument } from './reminder.schema';
import * as nodemailer from 'nodemailer';
import * as cron from 'cron';

@Injectable()
export class ReminderService {
  private readonly transporter;
  private readonly cronJob;
  constructor(
    @InjectModel(Reminder.name)
    private readonly reminderModel: Model<ReminderDocument>,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'deep@gmail.com',
        pass: '',
      },
    });

    this.cronJob = new cron.CronJob('00 00 12 * * *', () => {
      this.sendReminderEmail('deepika200799@gmail.com', 'My Message');
    });
    this.cronJob.start();
  }

  async sendReminderEmail(email: string, message: string): Promise<void> {
    await this.transporter.sendMail({
      from: 'deepika200799@gmail.com',
      to: email,
      subject: 'Reminder',
      text: message,
    });
  }
}
