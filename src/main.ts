import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
//import * as SqliteStore from 'better-sqlite3-session-store';
import * as sqlite from 'better-sqlite3';
const SqliteStore = require('better-sqlite3-session-store')(session)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const db = new sqlite("sessions.db", { verbose: console.log });
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
    cookie: {maxAge: 360000},
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
