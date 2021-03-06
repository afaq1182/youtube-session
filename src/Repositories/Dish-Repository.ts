import { EntityRepository, Repository } from "typeorm";
import { Dish } from "../Entities/Dish.entity";
import { DishDTO } from "../DTO/Dish-DTO";
import { NotFoundException, StreamableFile } from "@nestjs/common";


@EntityRepository(Dish)
export class DishRepository extends Repository<Dish>
{
    async CreateDish(dishDTO: DishDTO) 
    {
        const dish = new Dish();
        dish.name = dishDTO.name;
        dish.price = dishDTO.price;
        dish.InventoryFactor = dishDTO.InventoryFactor;
        dish.ImagePath = dishDTO.imagepath;
        dish.InventoryItem = dishDTO.InventoryItem;
        return await dish.save();
    }

    async ViewAllDishes() {
        const dishes = await Dish.findAndCount({
            skip: 1,
            take: 5
        });
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
        const dish = await Dish.findOne({id});
        if(dish===undefined) throw new NotFoundException('No such dish exists..!!!');
        console.log(dishDTO);
        dish.name = dishDTO.name;
        dish.price = dishDTO.price;
        dish.InventoryFactor = dishDTO.InventoryFactor;
        dish.InventoryItem = dishDTO.InventoryItem;
        return await dish.save();
    }

    async UpdateDishImage(id: number, path: string)
    {
        var dish = await Dish.findOneOrFail(id);
        console.log(path)
        dish.ImagePath = path;
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
    
    async GetImage(id: number)
    {
        try{
        const result =  await Dish.findOneOrFail({where: {id}});
        //console.log(result.ImagePath);
       // return createReadStream(result.ImagePath);
        return result.ImagePath;
        }
        catch(err)
        {
            throw new NotFoundException();
        }
    }

}