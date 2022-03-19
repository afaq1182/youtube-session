import { Controller, UseGuards, Post, Body, Get, Param, UsePipes, ParseIntPipe, Delete, Patch, Res, UseInterceptors, UploadedFile, Req, ClassSerializerInterceptor, HttpCode, StreamableFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream, ReadStream } from 'fs';
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

    @HttpCode(201)
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

    @HttpCode(200)
    @Get('/ViewAllDishes')
    async ViewAllDishes() 
    {
        return await this.dishService.ViewAllDishes();
    }

    @HttpCode(200)
    @Get('/ViewDish/:id')
    async ViewDish(@Param('id', ParseIntPipe) id: number) 
    {
        return await this.dishService.ViewDish(id);
    }

    @HttpCode(202)
    @Patch('/UpdateDish')
    @UseGuards(new IsAdmin())
    async UpdateDish(@Body() dishDTO: DishDTO) 
    {
        console.log(dishDTO)
        return await this.dishService.UpdateDish(dishDTO);
    }

    @HttpCode(200)
    @Delete('/:id')
    @UseGuards(new IsAdmin())
    async DeleteDish(@Param('id', ParseIntPipe) id: number) 
    {
        return await this.dishService.DeleteDish(id);
    }

    @HttpCode(201)
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file',
    {storage: diskStorage({
    destination: Helper.destinationPath,
    filename: Helper.customFileName})}))
    async FileUpload(@UploadedFile() file: Express.Multer.File ,@Res() res, @Req() req)
    {   
        console.log(req.body.dishid);
        res.sendFile(file.path);
        var paths = file.path;
        return await this.dishService.UpdateDishImage(req.body.dishid,paths);
        
    }

    @HttpCode(200)
    @Get('/image/:id')
    async GetImage(@Res({ passthrough: true }) res,@Param('id', ParseIntPipe) id: number) : Promise<StreamableFile>
    {
        const file : any = await this.dishService.GetImage(id);
        const file2 = createReadStream(file);
        //file2.pipe(res);
        res.set({
            'Content-Type': 'image/jpeg',
            'Content-Disposition': 'attachment; filename="dishimage.jpg"',
          });
        return new StreamableFile(file2);
    //    res.sendFile(file);
    }

}
