import { Injectable } from '@nestjs/common';
import { ExpenseDTO } from 'src/DTO/Expense-DTO';
import { ExpenseRepository } from 'src/Repositories/Expense-Repository';

@Injectable()
export class ExpenseService {
    constructor(private expenseRepository: ExpenseRepository){}

    async CreateExpense(expenseDTO: ExpenseDTO)
    {
        return await this.expenseRepository.CreateExpense(expenseDTO);
    }
    async ViewExpense(id: number)
    {
        return await this.expenseRepository.ViewExpense(id);
    } 
    async ViewAllExpenses(date: string)
    {
        return await this.expenseRepository.ViewAllExpenses(date);
    }
}