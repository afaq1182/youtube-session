import { OrderDTO } from "src/DTO/Order-DTO";
import { Dish } from "src/Entities/Dish.entity";
import { OrderDetails } from "src/Entities/Order-Detail.entity";
import { Order } from "src/Entities/Order.entity";
import { EntityRepository, Repository } from "typeorm";
import * as moment from 'moment';
import { CheckOutDTO } from "src/DTO/Check-Out.DTO";
@EntityRepository(Order)
export class OrderRepository extends Repository<Order>
{
    async CreateOrder(orderDTO: OrderDTO)
    {
        const {dishes} = orderDTO; const order = new Order(); var TotalPrice = 0; const arr = JSON.parse(dishes);
        for(var i =0; arr[i]!=undefined; i++)
        {
            var result = await Dish.findOne(arr[i]);
            if(result) TotalPrice = TotalPrice + result.price;
            console.log(i)
        }
        order.Bill = TotalPrice;
        order.CreatedAt = moment().format('YYYY-MM-DD hh-mm-ss');
        console.log(order.CreatedAt)
        const savedorder = await order.save();
        for(var i=0; arr[i]!=undefined; i++)
        {
            const orderdetail = new OrderDetails();
            
            orderdetail.dishid = arr[i];
            orderdetail.OrderId = savedorder.id;
            await orderdetail.save();
        }
        const response = {message: 'Order Created!', OrderDetails: savedorder}
        return {response};
    }

    async CheckOut(checkOutDTO: CheckOutDTO)
    {
        const {BillId, BillPayed, discount} = checkOutDTO;
        const result = await Order.findOne(BillId);
        result.CheckedOut = true;
        result.CheckOutAt = moment().format('YYYY-MM-DD hh-mm-ss');
        result.Bill_Payed = BillPayed;
        result.discount = discount;
        return result.save();
    }

    async ViewPendingOrders()
    {
        const result = await Order.findAndCount({where: {CheckedOut: false}});
        const response = { OrdersCount: result[1], Orders: result[0]}
        return response;
    }
}