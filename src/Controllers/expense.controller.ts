import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/Guards/authenticated.guard';
import { ExpenseDTO } from 'src/DTO/Expense-DTO';
import { ExpenseValidationPipe } from 'src/Pipes/Expense-Validation.pipe';
import { ExpenseService } from 'src/Services/expense.service';
import { IsAdmin } from 'src/Guards/isAdmin.guard';

@Controller('expense')
@UseGuards(AuthenticatedGuard)
export class ExpenseController {
    constructor(private expenseService: ExpenseService){}

    @Post('/create')
    @UsePipes(ExpenseValidationPipe)
    @UseGuards(new IsAdmin())
    async CreateExpense(@Body() expenseDTO: ExpenseDTO)
    {
        return await this.expenseService.CreateExpense(expenseDTO);
    }

    @Get('/view/:id')
    async ViewExpense(@Param('id', ParseIntPipe) id: number)
    {
        return await this.expenseService.ViewExpense(id);
    }

    @Get('/viewbydate')
    async ViewAllExpenses(@Body() expenseDTO: ExpenseDTO)
    {
        return await this.expenseService.ViewAllExpenses(expenseDTO);
    }

    @Patch('/update')
    @UsePipes(ExpenseValidationPipe)
    @UseGuards(new IsAdmin())
    async UpdateExpense(@Body() expenseDTO: ExpenseDTO)
    {
        return await this.expenseService.UpdateExpense(expenseDTO);
    }

    @Delete('/delete/:id')
    @UseGuards(new IsAdmin())
    async DeleteExpense(@Param() id: number)
    {
        return await this.expenseService.DeleteExpense(id);
    }
}
