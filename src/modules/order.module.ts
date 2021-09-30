import { Module } from '@nestjs/common';
import { InventoryRepository } from 'src/Repositories/Inventory-Repository';
import { OrderRepository } from 'src/Repositories/Order-Repository';
import { OrderController } from '../Controllers/order.controller';
import { OrderService } from '../Services/order.service';

@Module({
  imports: [InventoryRepository],
  controllers: [OrderController],
  providers: [OrderService,OrderRepository, InventoryRepository]
})
export class OrderModule {}
