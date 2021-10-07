import { Module } from '@nestjs/common';
import { DishController } from '../Controllers/dish.controller';
import { DishService } from '../Services/dish.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishRepository } from '../Repositories/Dish-Repository';
@Module({
  imports: [TypeOrmModule.forFeature([DishRepository])],
  controllers: [DishController],
  providers: [DishService]
})
export class DishModule { }
