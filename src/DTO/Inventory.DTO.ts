import { IsNumber, IsString } from "class-validator";

export class InventoryDTO
{
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    amount: number;

    @IsString()
    category: string;

    @IsString()
    Unit: string;
}