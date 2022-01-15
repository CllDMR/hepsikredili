import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiMainMainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiMainMainModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
