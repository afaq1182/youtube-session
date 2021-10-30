import { Module } from '@nestjs/common';
import { DishController } from '../Controllers/dish.controller';
import { DishService } from '../Services/dish.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishRepository } from '../Repositories/Dish-Repository';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [TypeOrmModule.forFeature([DishRepository]),
  MulterModule.register(
    {dest: __dirname+'uploads',
    limits: {fileSize: 2000000}}
    )],
  controllers: [DishController],
  providers: [DishService]
})
export class DishModule { }
