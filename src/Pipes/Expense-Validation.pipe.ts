import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseDTO } from "src/DTO/Expense-DTO";
import { ExpenseRepository } from "src/Repositories/Expense-Repository";

@Injectable()
export class ExpenseValidationPipe implements PipeTransform
{   constructor(@InjectRepository(ExpenseRepository) private expenseRepository: ExpenseRepository){}
    async transform(value: ExpenseDTO)
    {
        console.log(value.category)
        if(value.category) value.category = value.category.toUpperCase();
        const getCategories = await this.expenseRepository.FindExpenseType(value.category);
        value.categoryid = getCategories.id;
        // const checkcategory = getCategories.findIndex(getCategories => getCategories.name === value.category);
        // if(checkcategory===-1) throw new BadRequestException('Invalid Category..!!!');
        // value.categoryid = checkcategory+1;
        return value;
    }
}