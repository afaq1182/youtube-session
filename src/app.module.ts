import { Module } from '@nestjs/common';
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

@Module({
  imports: [UsersModule, AuthModule,DishModule, TypeOrmModule.forRoot(typeormConfig), OrderModule, InventoryModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
