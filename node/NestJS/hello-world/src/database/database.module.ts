import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Customer } from './entity/customer.entity';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost:27017/test', {
//       useNewUrlParser: true,
//     }),
//   ],
//   controllers: [],
//   providers: [],
// })
// export class MongoDatabaseModule {}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Customer],
      synchronize: true,
    }),
  ],
})
export class MysqlDatabaseModule {}
