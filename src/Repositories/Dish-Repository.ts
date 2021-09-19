import { EntityRepository, Repository } from "typeorm";
import { Dish } from "../Entities/Dish.entity";
import { DishDTO } from "../DTO/Dish-DTO";
import { NotFoundException } from "@nestjs/common";


@EntityRepository(Dish)
export class DishRepository extends Repository<Dish>
{
    async CreateDish(dishDTO: DishDTO) 
    {
        const dish = new Dish();
        dish.name = dishDTO.name;
        dish.price = dishDTO.price;
        dish.InventoryFactor = dishDTO.InventoryFactor;
        return await dish.save();
    }

    async ViewAllDishes() {
        const dishes = await Dish.findAndCount();
        const response = {TotalDishes: dishes[1], Dishes: dishes[0]}
        return {response};
    }
    async ViewDish(id: number) {
         return await Dish.findOneOrFail({where: {id}});

    }
    async GetDishByName(name: string)
    {
        return await Dish.findOne({where: {name}});   
    }

    async UpdateDish(dishDTO: DishDTO) 
    {
        console.log(dishDTO)
        const {id} = dishDTO;
        const dish = await Dish.findOne({id})
        if(dish===undefined) throw new NotFoundException('No such dish exists..!!!');
        console.log(dishDTO);
        dish.name = dishDTO.name;
        dish.price = dishDTO.price;
        dish.InventoryFactor = dishDTO.InventoryFactor;
        return await dish.save();
    }

    async DeleteDish(id: number) {
        try{
            return await Dish.delete(id);
        }
        catch(err)
        {
            throw new NotFoundException('This Dish Does not Exist...!!!');
        }
    }
}