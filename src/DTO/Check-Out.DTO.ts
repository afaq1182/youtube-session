import { Transform } from "class-transformer";
import { isInt, IsNumber,  IsNumberString } from "class-validator";

export class CheckOutDTO
{
    @IsNumber()
    BillId: number;

    @IsNumber()
    BillPayed: number;

    @IsNumber()
    discount: number;

    @IsNumber()
    custom_charges: number;

    @IsNumber()
    service_charges: number;
}