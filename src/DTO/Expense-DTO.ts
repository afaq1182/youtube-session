import { Double } from "typeorm";

export class ExpenseDTO
{
    id: number;
    name: string;
    category: string;
    date: Date;
    amount: Double;
    categoryid: number;
}