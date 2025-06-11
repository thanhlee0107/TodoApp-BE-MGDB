import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(port);
  console.log(`App running on ${port}`);
}
bootstrap();
