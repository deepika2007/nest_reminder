import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todos/todos.module';
import { DatabaseModule } from './database.module';
import { ReminderModule } from './reminder/reminder.module';

@Module({
  imports: [DatabaseModule, TodoModule, ReminderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
