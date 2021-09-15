import { Injectable } from '@nestjs/common';
import { DishRepository } from '../Repositories/Dish-Repository';

@Injectable()
export class DishService {
    constructor(private dishRepository: DishRepository) { }

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
    async DeleteDish(id: number) {
        return await this.dishRepository.DeleteDish(id);
    }
}
