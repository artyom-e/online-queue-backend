import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  await app.listen(port);
  console.log('Application is running on port ' + port);
}

bootstrap();
