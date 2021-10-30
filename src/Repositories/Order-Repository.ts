import { OrderDTO } from 'src/DTO/Order-DTO';
import { Dish } from 'src/Entities/Dish.entity';
import { OrderDetails } from 'src/Entities/Order-Detail.entity';
import { Order } from 'src/Entities/Order.entity';
import {
  EntityRepository,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import * as moment from 'moment';
import { CheckOutDTO } from 'src/DTO/Check-Out.DTO';
import { Users } from 'src/Entities/User.entity';
import { InventoryRepository } from './Inventory-Repository';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  constructor(private inventoryRepository: InventoryRepository) {
    super();
  }
  async CreateOrder(orderDTO: OrderDTO) {
    const { dishes, TableNumber, userid } = orderDTO;   const order = new Order();  var TotalPrice = 0;
    const Dishes = await Dish.findByIds(dishes);

    await this.inventoryRepository.UpdateInventoryByDishes(Dishes, dishes);
    TotalPrice = Dishes.reduce((acc, item, index) => {
      return acc + item.price * dishes[index].quantity;
    }, 0);
    order.Bill = TotalPrice;
    //order.CreatedAt = moment().format("DD-MM-YYYY hh:mm:ss A");
    order.CheckedOut = false;
    order.TableNumber = TableNumber;
    const user = new Users();
    user.id = userid;
    order.user = user;
    const savedorder = await order.save();
    Dishes.forEach(async (acc, index) => {
      const orderdetail = new OrderDetails();
      orderdetail.OrderId = savedorder.id;
      orderdetail.dishid = acc.id;
      orderdetail.dishquantity = dishes[index].quantity;
      orderdetail.orders = savedorder;
      await orderdetail.save();
    });
    const response = { message: 'Order Created!', OrderDetails: savedorder };
    return { response };
  }
  async CheckOut(checkOutDTO: CheckOutDTO) {
    const { BillId, BillPayed, custom_charges, service_charges, discount } = checkOutDTO;
    const order = await Order.createQueryBuilder('order')
      .where({ id: BillId })
      .getOneOrFail();
    order.CheckedOut = true;
    order.CheckedOutAt = moment().format('YYYY-MM-DD hh-mm-ss');
    order.Bill_Payed = BillPayed;
    order.discount = discount;
    order.custom_charges = custom_charges;
    order.service_charges = service_charges;
    order.Bill += custom_charges + service_charges;
    await order.save();
    const response = {
      OrderId: BillId,
      Bill: order.Bill,
      BillPayed: BillPayed-discount,
      Discount: discount,
    };
    return response;
  }

  async GetAllOrders(orderDTO: OrderDTO)
   {
    var { CreatedAt } = orderDTO;
    //CreatedAt = moment(CreatedAt).format('DD-MM-YYYY hh-mm-ss A');
    console.log(CreatedAt);
    if (!CreatedAt){ CreatedAt = moment().startOf('day').format('YYYY-MM-DD HH-mm-ss');}
    console.log('Created AT : ' + CreatedAt);
    const now = moment().format('DD-MM-YYYY hh-mm-ss A');
    console.log('Now Time : ' + now);
    console.log(CreatedAt.toString() < now);
    const result = await Order.findAndCount({
      where: { CreatedAt: LessThanOrEqual(now) } && {
        CreatedAt: MoreThanOrEqual(CreatedAt),
      },
    });
    //const result = await Order.createQueryBuilder('order').where({CreatedAt: LessThanOrEqual(`${now}`)}).andWhere({CreatedAt: MoreThanOrEqual(`${CreatedAt}`)}).getManyAndCount()
    //console.log(result);
    const response = {DateEntered: CreatedAt, OrdersCount: result[1], Orders: result[0] };
    return response;
  }

  async ViewActiveOrders()
  {
    const result =  await Order.findAndCount({where: {CheckedOut: false}});
    const response = {ActiveNumber: result[1], orders: result[0]};
    return response;
  }

  async Update(orderDTO: OrderDTO) {
    const { id, dishes, dishestoremove } = orderDTO;
    const order = await Order.findOneOrFail(id);
    const Dishes = await Dish.findByIds(dishes);
    if (dishestoremove.length > 0) {
      var DishesToRemove = await Dish.findByIds(dishestoremove);
      await this.inventoryRepository.RestoreInventoryByDishes(DishesToRemove, dishestoremove);
      DishesToRemove.forEach(async (acc, index) => {
        const checkdish = await OrderDetails.findOneOrFail(acc.id);
        if (checkdish) {
          order.Bill -= acc.price * dishestoremove[index].quantity;
          await order.save();
        }
      });
    }
    if (dishes.length > 0) {
      await this.inventoryRepository.UpdateInventoryByDishes(Dishes, dishes);
      Dishes.forEach(async (acc, index) => {
        console.log(acc);
        order.Bill += acc.price;
      });
      await order.save();
      dishes.forEach(async (acc, index) => {
        var orderdeatils = new OrderDetails();
        orderdeatils.OrderId = order.id;
        orderdeatils.dishid = dishes[index].id;
        orderdeatils.dishquantity = dishes[index].quantity;
        orderdeatils.orders = order;
        console.log(index);
        await orderdeatils.save();
      });
    }
    return 'Order Updated...!!!!';
  }

  async DeleteOrder(orderDTO: OrderDTO) {
    const { id } = orderDTO;
    const result = await Order.delete(id);
    //const orderdeatils = await OrderDetails.createQueryBuilder().delete().from(OrderDetails).where("OrderId= :id",{id}).execute();
    //return orderdeatils;
    return result;
  }

  async Getcurrenttime() {
    return moment().format('YYYY-MM-DD hh-mm-ss');
  }
}
