import { Controller, UseGuards, Post, Body, Get, Param, UsePipes, ParseIntPipe, Delete, Patch, Res, UseInterceptors, UploadedFile, Req, ClassSerializerInterceptor } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReadStream } from 'fs';
import { diskStorage } from 'multer';
import { DishDTO } from 'src/DTO/Dish-DTO';
import { Helper } from 'src/extras/helper';
import { DishNameValidationPipe } from 'src/Pipes/Dish-Validation.pipe';
import { DishAlreadyExists } from 'src/Pipes/DishAlreadyExists.pipe';
import { AuthenticatedGuard } from '../Guards/authenticated.guard';
import { IsAdmin } from '../Guards/isAdmin.guard';
import { DishService } from '../Services/dish.service';

@Controller('dish')
@UseGuards(new AuthenticatedGuard())
@UseInterceptors(ClassSerializerInterceptor)
export class DishController {
    constructor(private dishService: DishService) { }

    @UseGuards(new IsAdmin())
    @UseInterceptors(FileInterceptor('image',
    {storage: diskStorage({
    destination: Helper.destinationPath,
    filename: Helper.customFileName})}))
    @Post('/createdish')
    @UsePipes(DishAlreadyExists)
    async CreateDish(@Body() dishDTO: DishDTO,@UploadedFile() file: Express.Multer.File) 
    {
        console.log(file)
        dishDTO.imagepath = file.path;
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
    @UseGuards(new IsAdmin())
    async UpdateDish(@Body() dishDTO: DishDTO) 
    {
        console.log(dishDTO)
        return await this.dishService.UpdateDish(dishDTO);
    }

    @Delete('/:id')
    @UseGuards(new IsAdmin())
    async DeleteDish(@Param('id', ParseIntPipe) id: number) 
    {
        return await this.dishService.DeleteDish(id);
    }

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file',
    {storage: diskStorage({
    destination: Helper.destinationPath,
    filename: Helper.customFileName})}))
    async FileUpload(@UploadedFile() file: Express.Multer.File ,@Res() res, @Req() req, @Req() dishid: number)
    {   
        console.log(req.body.dishid);
        res.sendFile(file.path);
        var paths = file.path;
        return await this.dishService.UpdateDishImage(req.body.dishid,paths);
        
    }

    @Get('/image/:id')
    async GetImage(@Res() res,@Param('id', ParseIntPipe) id: number)
    {
        const file : any = await this.dishService.GetImage(id);
        console.log(file);
        res.sendFile(file);
        //return file.pipe(res);
    }

}
