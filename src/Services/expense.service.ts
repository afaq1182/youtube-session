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
    async ViewAllExpenses(expenseDTO: ExpenseDTO)
    {
        return await this.expenseRepository.ViewAllExpenses(expenseDTO);
    }
    async UpdateExpense(expenseDTO: ExpenseDTO)
    {
        return await this.expenseRepository.UpdateExpense(expenseDTO);
    }
    async DeleteExpense(id: number)
    {
        return await this.expenseRepository.DeleteExpense(id);
    }
}