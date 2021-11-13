import { Module } from '@nestjs/common';
import { ExpenseService } from '../Services/expense.service';
import { ExpenseController } from '../Controllers/expense.controller';
import { ExpenseRepository } from 'src/Repositories/Expense-Repository';
import { ExpenseType } from 'src/Entities/Expense-Types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseRepository, ExpenseType])],
  providers: [ExpenseService, ExpenseRepository, ExpenseType],
  controllers: [ExpenseController]
})
export class ExpenseModule {}
