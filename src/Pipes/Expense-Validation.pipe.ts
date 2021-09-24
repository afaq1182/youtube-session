import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseDTO } from "src/DTO/Expense-DTO";
import { ExpenseRepository } from "src/Repositories/Expense-Repository";

@Injectable()
export class ExpenseValidationPipe implements PipeTransform
{   constructor(@InjectRepository(ExpenseRepository) private expenseRepository: ExpenseRepository){}
    async transform(value: ExpenseDTO)
    {
        value.category = value.category.toUpperCase();
        const result = await this.expenseRepository.FindExpenseTypes();
        const checkcategory = result.findIndex(result => result.name === value.category);
        if(checkcategory===-1) throw new BadRequestException('Invalid Category..!!!');
        return value;
    }
}