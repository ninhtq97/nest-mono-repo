import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(UserModule);
  app.setGlobalPrefix('api');

  app.enableCors({ credentials: true, origin: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: true,
    }),
  );

  if (process.env.NODE_ENV !== 'prod') {
    const config = new DocumentBuilder()
      .setTitle('Jackpot User API Specs')
      .setDescription('The API description')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    app.use(helmet({ contentSecurityPolicy: false }));
  } else {
    app.use(helmet());
  }

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const port = process.env.USER_PORT || 3001;
  await app.listen(port, () => {
    Logger.log('User server is running on port: ' + port);
  });
}
bootstrap();
