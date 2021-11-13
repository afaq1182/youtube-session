import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from 'src/Entities/Order-Detail.entity';
import { InventoryRepository } from 'src/Repositories/Inventory-Repository';
import { OrderRepository } from 'src/Repositories/Order-Repository';
import { OrderController } from '../Controllers/order.controller';
import { OrderService } from '../Services/order.service';

@Module({
  imports: [InventoryRepository, TypeOrmModule.forFeature([OrderRepository, OrderDetails])],
  controllers: [OrderController],
  providers: [OrderService,OrderRepository, InventoryRepository]
})
export class OrderModule {}
