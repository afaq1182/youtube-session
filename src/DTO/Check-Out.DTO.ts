import { Transform } from "class-transformer";
import { isInt, IsNumber,  IsNumberString } from "class-validator";

export class CheckOutDTO
{
    @IsNumberString()
    BillId: number;

    @IsNumberString()
    BillPayed: number;

    @IsNumberString()
    discount: number;
}