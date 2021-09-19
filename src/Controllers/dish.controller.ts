import { Controller, UseGuards, Post, Body, Get, Param, UsePipes, ParseIntPipe, Delete, Patch, Res } from '@nestjs/common';
import { DishDTO } from 'src/DTO/Dish-DTO';
import { DishNameValidationPipe } from 'src/Pipes/Dish-Validation.pipe';
import { DishAlreadyExists } from 'src/Pipes/DishAlreadyExists.pipe';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { IsAdmin } from '../auth/isAdmin.guard';
import { DishService } from '../Services/dish.service';

@Controller('dish')
@UseGuards(new AuthenticatedGuard)
@UsePipes( DishNameValidationPipe)
export class DishController {
    constructor(private dishService: DishService) { }
    @UseGuards(new IsAdmin)
    @Post('/createdish')
    @UsePipes(DishAlreadyExists)
    async CreateDish(@Body() dishDTO: DishDTO) 
    {
        return await this.dishService.CreateDish(dishDTO);
    }

    @Get('/ViewAllDishes')
    async ViewAllDishes() 
    {
        return await this.dishService.ViewAllDishes();
    }

    @Get('/ViewDish/:id')
    async ViewDish(@Param('id', ParseIntPipe) id: number) 
    {
        return await this.dishService.ViewDish(id);
    }

    @Patch('/UpdateDish')
    @UseGuards(new IsAdmin)
    async UpdateDish(@Body() dishDTO: DishDTO) 
    {
        console.log(dishDTO)
        return await this.dishService.UpdateDish(dishDTO);
    }

    @Delete('/:id')
    @UseGuards(new IsAdmin)
    async DeleteDish(@Param('id', ParseIntPipe) id: number) 
    {
        return await this.dishService.DeleteDish(id);
    }

    @Get('/image/:id')
    async GetImage(@Res() res,@Param('id', ParseIntPipe) id: number)
    {
        const file : any = await this.dishService.GetImage(id);
        file.pipe(res);
    }
}
