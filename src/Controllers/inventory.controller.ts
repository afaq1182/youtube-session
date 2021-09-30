import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { InventoryDTO } from 'src/DTO/Inventory.DTO';
import { InventoryService } from 'src/Services/inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private inventoryService: InventoryService){}

    @Post('/create')
    async Create()
    {

    }

    @Get('/getall')
    async GetAllItems()
    {

    }

    @Get('getone')
    async GetOne()
    {

    }
    
    @Patch('/update')
    async UpdateInventory(@Body() inventoryDTO: InventoryDTO)
    {
        return await this.inventoryService.UpdateInventory(inventoryDTO);
    }
}
