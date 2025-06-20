import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix for all routes
  app.setGlobalPrefix(`${appConfig.api.prefix}/${appConfig.api.version}`);

  // CORS configuration
  app.enableCors({
    origin: appConfig.cors.origin,
    methods: appConfig.cors.methods,
    credentials: appConfig.cors.credentials,
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(appConfig.port);
  console.log(
    `🚀 Application is running on: http://localhost:${appConfig.port}`,
  );
  console.log(
    `📚 API Documentation: http://localhost:${appConfig.port}/${appConfig.api.prefix}/${appConfig.api.version}`,
  );
}

bootstrap();
