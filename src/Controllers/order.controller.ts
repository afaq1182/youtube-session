import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { CheckOutDTO } from 'src/DTO/Check-Out.DTO';
import { OrderDTO } from 'src/DTO/Order-DTO';
import { OrderService } from 'src/Services/order.service';

@Controller('order')
@UseGuards(AuthenticatedGuard)
export class OrderController {
    constructor(private orderService: OrderService){}

    @Post('/createorder')
    async CreateOrder(@Body() orderDTO: OrderDTO)
    {
        return await this.orderService.CreateOrder(orderDTO);
    }

    @Post('/GetOrders')
    async GetAllOrders(@Body() orderDTO: OrderDTO)
    {
        return await this.orderService.GetAllOrders(orderDTO);
    }
}
