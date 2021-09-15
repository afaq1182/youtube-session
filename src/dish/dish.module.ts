import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from '../Services/dish.service'
@Module({
  controllers: [DishController],
  providers: [DishService]
})
export class DishModule { }
