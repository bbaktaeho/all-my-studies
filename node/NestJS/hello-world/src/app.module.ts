import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { customerModule } from './customer-module/customer.module';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './task-module/tast.module';

@Module({
  imports: [TaskModule, DatabaseModule, customerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
