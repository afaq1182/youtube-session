import { Dish } from "src/Entities/Dish.entity";

export class OrderDTO
{
    id: number;
    dishes: [number];
    Bill: number;
    Bill_Payed: number;
    discount: number;
    CreatedAt: Date;
    CheckOutAt: Date;
}