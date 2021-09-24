import { Module } from '@nestjs/common';
import { ExpenseService } from '../Services/expense.service';
import { ExpenseController } from '../Controllers/expense.controller';
import { ExpenseRepository } from 'src/Repositories/Expense-Repository';

@Module({
  providers: [ExpenseService, ExpenseRepository],
  controllers: [ExpenseController]
})
export class ExpenseModule {}
