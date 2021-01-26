import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from 'src/swagger/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter';
import { LoggingInterceptor } from './core/interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalInterceptors(new LoggingInterceptor());
  // app.use(Logger);
  app.setGlobalPrefix('api/v1');
  SwaggerModule.setup('api', app, createDocument(app));

  await app.listen(9000);
}
bootstrap();
