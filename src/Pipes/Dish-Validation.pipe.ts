import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { DishDTO } from "src/DTO/Dish-DTO";

@Injectable()
export class DishNameValidationPipe implements PipeTransform
{ 

    async transform(value: DishDTO)
    {   if(!value.id === undefined) 
        {
        if(isNaN(value.id)) throw new BadRequestException('Please Enter Valid Id..!!!');
        }
        if(value.name.length>30) throw new BadRequestException('Name of Dish is too LONG...!!!');
        if(value.price>6000) throw new BadRequestException('Price is too High...!!!');
        return value;
    }
}