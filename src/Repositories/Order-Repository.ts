import { OrderDTO } from "src/DTO/Order-DTO";
import { Dish } from "src/Entities/Dish.entity";
import { OrderDetails } from "src/Entities/Order-Detail.entity";
import { Order } from "src/Entities/Order.entity";
import { EntityRepository, LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import * as moment from 'moment';
import { CheckOutDTO } from "src/DTO/Check-Out.DTO";
@EntityRepository(Order)
export class OrderRepository extends Repository<Order>
{
    async CreateOrder(orderDTO: OrderDTO)
    {
        const {dishes,Bill_Payed,discount} = orderDTO; const order = new Order(); var TotalPrice = 0;
        const newDishes = await Dish.findByIds(dishes);
        TotalPrice = newDishes.reduce((acc,item) => {
        return acc + item.price; },0);
        order.Bill = TotalPrice;
        order.CreatedAt = moment().format('YYYY-MM-DD hh-mm-ss');
        order.discount = discount;
        order.Bill_Payed = TotalPrice;
        order.CheckedOut = true;
        const savedorder = await order.save();
        dishes.forEach( async (acc) => {
        const orderdetail = new OrderDetails();
        orderdetail.OrderId = savedorder.id;
        orderdetail.dishid = acc;
        await orderdetail.save(); 
        })
        const response = {message: 'Order Created!', OrderDetails: savedorder, Balance: Bill_Payed-TotalPrice}
        return {response};
    }

    async GetAllOrders(orderDTO: OrderDTO)
    {
        const {CreatedAt} = orderDTO;
        var date;
        if(!CreatedAt) date = moment().startOf('day').format('YYYY-MM-DD HH-mm-ss');
        console.log(date)
        const now = moment().format('YYYY-MM-DD hh-mm-ss');
        const result = await Order.createQueryBuilder('order').where({CreatedAt: LessThanOrEqual(`${now}`)}).andWhere({CreatedAt: MoreThanOrEqual(`${date}`)}).getManyAndCount()
        console.log(result);
        const response = {OrdersCount: result[1], Orders: result[0]};
        return response;
    }
}