import moment from "moment";
import { ExpenseDTO } from "src/DTO/Expense-DTO";
import { ExpenseType } from "src/Entities/Expense-Types.entity";
import { Expense } from "src/Entities/Expense.entity";
import { EntityRepository, MoreThanOrEqual, Repository } from "typeorm";

@EntityRepository(Expense)
export class ExpenseRepository extends Repository<Expense>
{
    async CreateExpense(expenseDTO: ExpenseDTO)
    {
        const {name, category, amount} = expenseDTO;
        const expense = new Expense();
        expense.name = name;
        expense.category = category;
        expense.amount = amount;
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

    async FindExpenseTypes()
    {
        return await ExpenseType.find();
    }
}