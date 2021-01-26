import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlDatabaseModule } from './database/database.module';
import { TaskModule } from './task-module/tast.module';
import { UserModule } from './user-module/user.module';

@Module({
  imports: [TaskModule, MysqlDatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
