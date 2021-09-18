import { ParseIntPipe, UsePipes } from "@nestjs/common";

export class DishDTO {
    id: number;
    name: string;
    price: number;
    InventoryFactor: number;
}