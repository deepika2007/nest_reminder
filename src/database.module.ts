// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/todo-app', {
      retryAttempts: 5,
      retryDelay: 3000,
    }),
  ],
})
export class DatabaseModule {}
