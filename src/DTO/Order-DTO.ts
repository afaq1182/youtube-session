import { Transform } from "class-transformer";
import { IsNumber } from "class-validator";
import * as moment from "moment";

export class OrderDTO
{
    @IsNumber()
    id: number;

    dishes: [{id: number,quantity: number}];

    userid: number;

    dishestoremove: [{id: number,quantity: number}];

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

    @Transform(date1 => moment(date1.value).format('DD-MM-yyyy hh:mm:ss A'))
    CreatedAt: string;

    CheckOutAt: Date;
}