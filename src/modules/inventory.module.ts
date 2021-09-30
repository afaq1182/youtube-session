import { Module } from '@nestjs/common';
import { InventoryService } from '../Services/inventory.service';
import { InventoryController } from '../Controllers/inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryRepository } from 'src/Repositories/Inventory-Repository';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryRepository])],
  providers: [InventoryService],
  controllers: [InventoryController]
})
export class InventoryModule {}
