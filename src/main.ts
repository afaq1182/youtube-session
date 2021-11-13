import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
declare const module: any;
//import * as SqliteStore from 'better-sqlite3-session-store';
import * as sqlite from 'better-sqlite3';
import csurf from 'csurf'
import { ClassSerializerInterceptor } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const SqliteStore = require('better-sqlite3-session-store')(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  const port = process.env.PORT || 3000;
  const db = new sqlite("sessions.db", { });//verbose: console.log });
  app.use(
    session({
    store: new SqliteStore({
      client: db, 
      expired: {
        clear: true,
        intervalMs: 900000 //ms = 15min
      }
    }),
    secret: 'afaq', 
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 3600000}
    })
  );
  app.enableCors();
  app.use(passport.initialize());
  app.use(passport.session());
  ///app.use(csurf({cookie: true});
  await app.listen(port);
  
}
bootstrap();
