import { IsNumber } from "class-validator";

export class OrderDTO
{
    @IsNumber()
    id: number;

    dishes: [number];

    userid: number;

    @IsNumber()
    TableNumber: number;

    @IsNumber()
    Bill: number;

    @IsNumber()
    Bill_Payed: number;

    @IsNumber()
    discount: number;

    @IsNumber()
    custom_charges: number;

    @IsNumber()
    service_charges: number;

    CreatedAt: string;
    CheckOutAt: Date;
}