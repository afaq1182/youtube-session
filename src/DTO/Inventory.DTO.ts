import { normalizeUnits } from "moment";
import { Double } from "typeorm";

export class InventoryDTO
{
    id: number;
    name: string;
    amount: number;
    category: string;
    Unit: string;
}