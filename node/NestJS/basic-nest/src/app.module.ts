import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
