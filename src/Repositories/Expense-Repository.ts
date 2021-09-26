import { NotFoundException } from "@nestjs/common";
import * as moment from "moment";
import { ExpenseDTO } from "src/DTO/Expense-DTO";
import { ExpenseType } from "src/Entities/Expense-Types.entity";
import { Expense } from "src/Entities/Expense.entity";
import { EntityRepository, MoreThanOrEqual, Repository } from "typeorm";

@EntityRepository(Expense)
export class ExpenseRepository extends Repository<Expense>
{
    async CreateExpense(expenseDTO: ExpenseDTO)
    {
        const {name, category, amount, categoryid} = expenseDTO;
        const expense = new Expense();
        expense.name = name;
        expense.type = category;
        expense.category = categoryid;
        expense.amount = amount;
        //expense.CreatedAt = moment().format('YYYY-MM-DD hh-mm-ss');
        //console.log(expense)
        return await expense.save();
    }

    async ViewExpense(id: number)
    {
        return await Expense.findOneOrFail(id);
    }

    async ViewAllExpenses(date: string)
    {
        if(!date) date = moment().startOf("day").format('YYYY-MM-DD hh-mm-ss');
        console.log(date)
        const result = await Expense.createQueryBuilder('Expense').where({CreatedAt: MoreThanOrEqual(date)}).getManyAndCount();
        const response = {ExpenseCount: result[1], Expenses: result[0]}
        return response;
    }

    async UpdateExpense()
    {

    }

    async DeleteExpense()
    {

    }

    async FindExpenseType(expensetype: string)
    {
        try
        {
        return await ExpenseType.findOneOrFail({where: {name: expensetype}});
        }
        catch(err)
        {
        throw new NotFoundException('The Entered Category was NOT FOUND...!!!!');
        }
    }
}