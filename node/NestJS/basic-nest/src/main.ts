import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // whitelist -> decorator가 없는 property의 object를 거른다.
  // forbidNonWhitelisted -> 애초에 없던 property가 들어오면 존재해선 안되는 요소로 거른다.
  // transform -> 받아온 요소를 변환할 수 있도록 한다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
