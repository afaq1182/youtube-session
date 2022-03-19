import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
declare const module: any;
import * as sqlite from 'better-sqlite3';

const SqliteStore = require('better-sqlite3-session-store')(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Don't use interceptors on global level because images wont be able to stream at all
  //app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
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
    secret: process.env.SECRET, 
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 3600000}
    })
  );
  app.enableCors();
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(port);
  
}
bootstrap();
