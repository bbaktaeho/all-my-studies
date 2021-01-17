import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class-validator, class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 클라이언트가 보낸 것을 우리가 원하는 실제 타입으로 변환해줌
    }),
  );

  await app.listen(3000);
}
bootstrap();
