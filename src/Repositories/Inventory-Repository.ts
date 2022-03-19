import { NotFoundException } from "@nestjs/common";
import { InventoryDTO } from "src/DTO/Inventory.DTO";
import { Dish } from "src/Entities/Dish.entity";
import { Inventory } from "src/Entities/Inventory.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Inventory)
export class InventoryRepository extends Repository<Inventory>
{
    async CreateItem(inventoryDTO: InventoryDTO)
    {
        const {name,amount,Unit,category} = inventoryDTO;
        const inventory = new Inventory();
        inventory.name = name;
        inventory.category = category;
        inventory.amount = amount;
        inventory.unit = Unit;
        return await inventory.save();
    }

    async ViewItem(id: number) 
    {
        return await this.FindInventory(id);
    }

    async ViewAllItems()
    {
        const inventory = await Inventory.findAndCount();
        const response = {InventoryCount: inventory[1], Items: inventory[0]};
        return response;
    }

    async UpdateInventory(inventoryDTO: InventoryDTO)
    {
        const {id,name,amount} = inventoryDTO;
        const inventory = await this.FindInventory(id);
        if(name) inventory.name = name;
        inventory.amount -= amount;
        return await inventory.save();
    }

    async UpdateInventoryByDishes(items: Dish[], dishes: [{id: number, quantity: number}] )
    {
        items.forEach( async (acc, index) => {
            const id = acc.InventoryItem;
            await Inventory.createQueryBuilder()
            .update(Inventory)
            .set({amount: () => `amount - ${acc.InventoryFactor * dishes[index].quantity}`})
            .where("id = :id",{id})
            .execute();
        });
    }

    async RestoreInventoryByDishes(items: Dish[], dishes: [{id: number, quantity: number}] )
    {
        items.forEach( async (acc, index) => {
            const id = acc.InventoryItem;
            await Inventory.createQueryBuilder()
            .update(Inventory)
            .set({amount: () => `amount + ${acc.InventoryFactor * dishes[index].quantity}`})
            .where("id = :id",{id})
            .execute();
        });
    }
    async FindInventory(id: number)
    {
        try
        {
            return await Inventory.findOneOrFail(id);
        }
        catch(err)
        {
            throw new NotFoundException('Inventory NOT Found....!!!!');
        }
    }
}