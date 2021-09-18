import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { DishDTO } from "src/DTO/Dish-DTO";
import { DishRepository } from "src/Repositories/Dish-Repository";

@Injectable()
export class DishAlreadyExists implements PipeTransform
{   constructor(private dishRepository: DishRepository){}

    async transform(value: DishDTO)
    {
if(await this.dishRepository.GetDishByName(value.name)) throw new BadRequestException('This Dish Already Exists,Please Update It...!!')
        return value;
    }
}