import { Injectable } from '@nestjs/common';
import { DishRepository } from '../Repositories/Dish-Repository';
import { DishDTO } from '../DTO/Dish-DTO';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DishService {
    constructor(@InjectRepository(DishRepository) private dishRepository: DishRepository) { }

    async CreateDish(dishDTO: DishDTO) {
        return await this.dishRepository.CreateDish(dishDTO);
    }
    async ViewAllDishes() {
        return await this.dishRepository.ViewAllDishes();
    }
    async ViewDish(id: number) {
        return await this.dishRepository.ViewDish(id);
    }
    async UpdateDish(dishDTO: DishDTO) {
        return await this.dishRepository.UpdateDish(dishDTO);
    }
    async UpdateDishImage(id: number, path: string)
    {
        return await this.dishRepository.UpdateDishImage(id,path);
    }
    async DeleteDish(id: number) {
        return await this.dishRepository.DeleteDish(id);
    }
    async GetImage(id: number)
    {
        return await this.dishRepository.GetImage(id);
    }
}