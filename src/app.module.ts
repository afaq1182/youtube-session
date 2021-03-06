import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { AuthModule } from './modules/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/TypeOrm.config';
import { DishModule } from './modules/dish.module';
import { OrderModule } from './modules/order.module';
import { InventoryModule } from './modules/inventory.module';
import { ExpenseModule } from './modules/expense.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { APP_GUARD, APP_INTERCEPTOR} from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [UsersModule, AuthModule,DishModule, TypeOrmModule.forRoot(typeormConfig),ServeStaticModule.forRoot({
    rootPath: join(__dirname),
  })
  , OrderModule, InventoryModule, ExpenseModule,],// ThrottlerModule.forRoot({ ttl: 60, limit:400})],
  controllers: [AppController],
  providers: [AppService,{provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor}]// {provide: APP_GUARD, useClass: ThrottlerGuard}, {provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor}],
})
export class AppModule {}
