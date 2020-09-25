import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

// entry point -> movies
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return '모든 영화를 리턴';
  }

  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `We are searching ${searchingYear}`;
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return `영화 하나만 리턴 ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);

    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return 'Remove Movie';
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
