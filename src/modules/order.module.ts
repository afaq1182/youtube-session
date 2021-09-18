import { Module } from '@nestjs/common';
import { OrderRepository } from 'src/Repositories/Order-Repository';
import { OrderController } from '../Controllers/order.controller';
import { OrderService } from '../Services/order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService,OrderRepository]
})
export class OrderModule {}
