import { Injectable } from '@nestjs/common';
import { InventoryDTO } from 'src/DTO/Inventory.DTO';
import { InventoryRepository } from 'src/Repositories/Inventory-Repository';

@Injectable()
export class InventoryService {
    constructor(private inventoryRepository: InventoryRepository) {}

    async UpdateInventory(inventoryDTO: InventoryDTO)
    {
        return await this.inventoryRepository.UpdateInventory(inventoryDTO);
    }
}
