import { Body, Controller, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/Guards/authenticated.guard';
import { ExpenseDTO } from 'src/DTO/Expense-DTO';
import { ExpenseValidationPipe } from 'src/Pipes/Expense-Validation.pipe';
import { ExpenseService } from 'src/Services/expense.service';

@Controller('expense')
@UseGuards(AuthenticatedGuard)
export class ExpenseController {
    constructor(private expenseService: ExpenseService){}

    @Post('/create')
    @UsePipes(ExpenseValidationPipe)
    async CreateExpense(@Body() expenseDTO: ExpenseDTO)
    {
        return await this.expenseService.CreateExpense(expenseDTO);
    }
}
