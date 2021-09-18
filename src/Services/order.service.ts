import { Injectable } from '@nestjs/common';
import { CheckOutDTO } from 'src/DTO/Check-Out.DTO';
import { OrderDTO } from 'src/DTO/Order-DTO';
import { OrderRepository } from 'src/Repositories/Order-Repository';

@Injectable()
export class OrderService {
    constructor(private orderRepository: OrderRepository){}

    async CreateOrder(orderDTO: OrderDTO)
    {
        return await this.orderRepository.CreateOrder(orderDTO);
    }

    async CheckOut(checkOutDTO: CheckOutDTO)
    {
        return await this.orderRepository.CheckOut(checkOutDTO);
    }

    async ViewPendingOrders()
    {
        return await this.orderRepository.ViewPendingOrders();
    }
}
