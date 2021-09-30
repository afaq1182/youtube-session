import { OrderDTO } from "src/DTO/Order-DTO";
import { Dish } from "src/Entities/Dish.entity";
import { OrderDetails } from "src/Entities/Order-Detail.entity";
import { Order } from "src/Entities/Order.entity";
import { EntityRepository, LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import * as moment from 'moment';
import { CheckOutDTO } from "src/DTO/Check-Out.DTO";
import { Users } from "src/Entities/User.entity";
import { InventoryRepository } from "./Inventory-Repository";
import { Inventory } from "src/Entities/Inventory.entity";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order>
{
    constructor(private inventoryRepository: InventoryRepository ){super()}
    async CreateOrder(orderDTO: OrderDTO)
    {
        const {dishes,Bill_Payed,TableNumber, userid} = orderDTO; const order = new Order(); var TotalPrice = 0;
        const Dishes = await Dish.findByIds(dishes);
        await this.inventoryRepository.UpdateInventoryByDishes(Dishes);
        TotalPrice = Dishes.reduce((acc,item) => {
        return acc + item.price; },0);
        order.Bill = TotalPrice;
        order.CreatedAt = await this.Getcurrenttime();
        order.CheckedOut = false;
        order.TableNumber = TableNumber;
        const user = new Users();
        user.id = userid;
        order.user = user;
        const savedorder = await order.save();
        dishes.forEach( async (acc) => {
        const orderdetail = new OrderDetails();
        orderdetail.OrderId = savedorder.id;
        orderdetail.dishid = acc;
        orderdetail.orders = savedorder;
        await orderdetail.save(); 
        })
        const response = {message: 'Order Created!', OrderDetails: savedorder, Balance: Bill_Payed-TotalPrice}
        return {response};
    }
    async CheckOut(checkOutDTO: CheckOutDTO)
    {
        const {BillId, BillPayed, custom_charges, service_charges} = checkOutDTO;
        const order = await Order.createQueryBuilder('order').where({id: BillId}).getOneOrFail();
        order.CheckedOut = true;
        order.CheckedOutAt = moment().format('YYYY-MM-DD hh-mm-ss');
        order.Bill_Payed = BillPayed;
        order.discount = order.Bill - BillPayed;
        order.custom_charges = custom_charges;
        order.service_charges = service_charges;
        order.Bill = order.Bill + custom_charges+service_charges;
        return await order.save();
    } 

    async GetAllOrders(orderDTO: OrderDTO)
    {
        var {CreatedAt} = orderDTO;
        if(!CreatedAt) CreatedAt = moment().startOf('day').format('YYYY-MM-DD HH-mm-ss');
        console.log("Created AT : "+CreatedAt)
        const now = moment().format('YYYY-MM-DD hh-mm-ss');
        console.log("Now Time"+now)
        console.log(CreatedAt.toString()<now)
        const result = await Order.findAndCount({where: {CreatedAt: LessThanOrEqual(now)} && {CreatedAt: MoreThanOrEqual(CreatedAt)}})
        //const result = await Order.createQueryBuilder('order').where({CreatedAt: LessThanOrEqual(`${now}`)}).andWhere({CreatedAt: MoreThanOrEqual(`${CreatedAt}`)}).getManyAndCount()
        console.log(result);
        const response = {OrdersCount: result[1], Orders: result[0]};
        return response;
    }

    async Update(orderDTO: OrderDTO)
    {
        const {id,dishes} = orderDTO;
        const dishindb = await Dish.findByIds(dishes);
        const order = await Order.findOneOrFail(id);
        dishindb.forEach(async (acc,index)=> {
        console.log(acc)
        order.Bill = order.Bill + dishindb[index].price;
        await order.save();
        })
        dishes.forEach(async (acc,index) => {
        const orderdeatils = new OrderDetails();
        orderdeatils.OrderId = order.id;
        orderdeatils.dishid = dishes[index];
        console.log(index)
        await orderdeatils.save();
        });
        return "Order Updated...!!!!";
    }

    async DeleteOrder(orderDTO: OrderDTO)
    {
        const {id} = orderDTO;
        const result = await Order.delete(id);
        //const orderdeatils = await OrderDetails.createQueryBuilder().delete().from(OrderDetails).where("OrderId= :id",{id}).execute();
        //return orderdeatils;
        return result;
    }

    async Getcurrenttime()
    {
        return moment().format('YYYY-MM-DD hh-mm-ss')
    }

}