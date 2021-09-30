import { Body, Controller, Delete, Get, Patch, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/Guards/authenticated.guard';
import { CheckOutDTO } from 'src/DTO/Check-Out.DTO';
import { OrderDTO } from 'src/DTO/Order-DTO';
import { OrderService } from 'src/Services/order.service';

@Controller('order')
@UseGuards(AuthenticatedGuard)
export class OrderController {
    constructor(private orderService: OrderService){}

    @Post('/createorder')
    async CreateOrder(@Body() orderDTO: OrderDTO, @Req() req)
    {
        orderDTO.userid = req.user.id;
        return await this.orderService.CreateOrder(orderDTO);
    }

    @Post('/checkout')
    @UsePipes(ValidationPipe)
    async CheckOut(@Body() checkOutDTO: CheckOutDTO)
    {
        return await this.orderService.CheckOut(checkOutDTO);
    }

    @Post('/GetOrders')
    async GetAllOrders(@Body() orderDTO: OrderDTO)
    {
        return await this.orderService.GetAllOrders(orderDTO);
    }

    @Patch('/update')
    async Update(@Body() orderDTO: OrderDTO)
    {
        return await this.orderService.Update(orderDTO);
    }

    @Delete('/delete')
    async DeleteOrder(@Body() orderDTO: OrderDTO)
    {
        console.log(orderDTO)
        return await this.orderService.DeleteOrder(orderDTO);
    }
}
