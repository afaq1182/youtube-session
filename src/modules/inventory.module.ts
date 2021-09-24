import { Module } from '@nestjs/common';
import { InventoryService } from '../Services/inventory.service';
import { InventoryController } from '../Controllers/inventory.controller';

@Module({
  providers: [InventoryService],
  controllers: [InventoryController]
})
export class InventoryModule {}
