import { Transform } from "class-transformer";
import { isInt, IsNumber,  IsNumberString } from "class-validator";

export class CheckOutDTO
{
    @IsNumberString()
    BillId: number;

    @IsNumberString()
    BillPayed: number;

    @IsNumber()
    discount: number;

    @IsNumber()
    custom_charges: number;

    @IsNumber()
    service_charges: number;
}