import { Controller, UseGuards, Post, Body, Get, Param, UsePipes, ParseIntPipe, Delete } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { IsAdmin } from '../auth/isAdmin.guard';
import { DishService } from '../Services/dish.service';

@Controller('dish')
@UseGuards(new AuthenticatedGuard)
export class DishController {
    constructor(private dishService: DishService) { }
    @UseGuards(new IsAdmin)
    @Post('/createdish')
    async CreateDish(@Body() dishDTO: DishDTO) {
        return await this.dishService.CreateDish(dishDTO);
    }

    @Get('/ViewAllDishes')
    async ViewAllDishes() {
        return await this.dishService.ViewAllDishes();
    }

    @Get('/ViewDish/:id')
    async ViewDish(@Param('id', ParseIntPipe) id: number) {
        return await this.dishService.ViewDish(id);
    }

    @UseGuards(new IsAdmin)
    @Post('/UpdateDish')
    async UpdateDish(@Body() dishDTO: DishDTO) {
        return await this.dishService.UpdateDish(dishDTO);
    }

    @UseGuards(new IsAdmin)
    @Delete('/:id')
    async DeleteDish(@Param('id', ParseIntPipe) id: number) {
        return await this.dishService.DeleteDish(id);
    }
}
