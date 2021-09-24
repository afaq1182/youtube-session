import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ExpenseDTO } from 'src/DTO/Expense-DTO';
import { ExpenseValidationPipe } from 'src/Pipes/Expense-Validation.pipe';
import { ExpenseService } from 'src/Services/expense.service';

@Controller('expense')
export class ExpenseController {
    constructor(private expenseService: ExpenseService){}

    @Post('/create')
    @UsePipes(ExpenseValidationPipe)
    async CreateExpense(@Body() expenseDTO: ExpenseDTO)
    {
        //return await this.expenseService.CreateExpense(expenseDTO);
        return expenseDTO;
    }
}
