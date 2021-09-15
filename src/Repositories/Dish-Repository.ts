import { EntityRepository, Repository } from "typeorm";
import { Dish } from "../Entities/Dish.entity";
import { DishDTO } from "../DTO/Dish-DTO";


@EntityRepository(Dish)
export class DishRepository extends Repository<Dish>
{
    async CreateDish(dishDTO: DishDTO) {

    }
    async ViewAllDishes() {

    }
    async ViewDish(id: number) {

    }
    async UpdateDish(dishDTO: DishDTO) {

    }
    async DeleteDish(id: number) {

    }
}